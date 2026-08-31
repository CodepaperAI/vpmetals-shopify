import { mkdir, writeFile } from 'node:fs/promises';
import { catalogProducts } from '../src/data/catalog.ts';

const existingModels = new Set([
  'PSE 100-20-8-18','PSE 20-12','PSE 20-18','PSE 20-24','PSE 20-33-2','PSE 20-33-4','PSE 20-33-6',
  'PSE 33-12','PSE 33-18','PSE 33-147-8-4','PSE 33-8','PSE FWB','420-1',
]);
const collectionNames = {
  'gas-cage': 'Gas Cages & Carriers',
  'material-rack': 'Material Racks & Transport',
  'industrial-table': 'Industrial Tables & Carts',
  'warehouse-safety': 'Warehouse Safety',
};
const sourceBase = 'https://vpmetals-shopify.vercel.app';
const outputDir = new URL('../migration/', import.meta.url);
const headers = [
  'Handle','Title','Body (HTML)','Vendor','Product Category','Type','Tags','Published','Option1 Name','Option1 Value',
  'Variant SKU','Variant Inventory Tracker','Variant Inventory Policy','Variant Fulfillment Service','Variant Price','Variant Requires Shipping',
  'Variant Taxable','Image Src','Image Position','Image Alt Text','Status','Model number (product.metafields.custom.model_number)',
  'Application (product.metafields.custom.applications)','Specifications (product.metafields.custom.specifications)',
  'Features (product.metafields.custom.features)','Source slug (product.metafields.custom.source_slug)',
];
const esc = value => `"${String(value ?? '').replaceAll('"','""')}"`;
const htmlList = items => `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
const rows = [];

for (const product of catalogProducts.filter(product => !existingModels.has(product.model))) {
  const body = `<p>${product.description}</p><h3>Applications</h3><p>${product.application}</p>`;
  const specs = htmlList(product.specs.map(spec => `<strong>${spec.label}:</strong> ${spec.value}`));
  const features = htmlList(product.features);
  const tags = ['migration-2026', product.collection, product.category, product.featured ? 'featured' : ''].filter(Boolean).join(', ');
  const common = {
    Handle: product.slug, Title: product.name, 'Body (HTML)': body, Vendor: 'Pro Steel Equipment',
    'Product Category': '', Type: collectionNames[product.collection], Tags: tags, Published: 'FALSE',
    'Option1 Name': 'Title', 'Option1 Value': 'Default Title', 'Variant SKU': product.model,
    'Variant Inventory Tracker': 'shopify', 'Variant Inventory Policy': 'deny', 'Variant Fulfillment Service': 'manual',
    'Variant Price': product.price ?? '', 'Variant Requires Shipping': 'TRUE', 'Variant Taxable': 'TRUE',
    'Image Src': `${sourceBase}${product.image}`, 'Image Position': 1, 'Image Alt Text': product.alt, Status: 'draft',
    'Model number (product.metafields.custom.model_number)': product.model,
    'Application (product.metafields.custom.applications)': product.application,
    'Specifications (product.metafields.custom.specifications)': specs,
    'Features (product.metafields.custom.features)': features,
    'Source slug (product.metafields.custom.source_slug)': product.slug,
  };
  rows.push(headers.map(header => esc(common[header])).join(','));
}

await mkdir(outputDir, { recursive: true });
await writeFile(new URL('shopify-new-products-draft.csv', outputDir), `${headers.join(',')}\n${rows.join('\n')}\n`);
await writeFile(new URL('shopify-new-products-manifest.json', outputDir), JSON.stringify({
  generatedAt: new Date().toISOString(),
  source: 'src/data/catalog.ts',
  currency: 'CAD',
  newProductCount: catalogProducts.filter(product => !existingModels.has(product.model)).length,
  products: catalogProducts.filter(product => !existingModels.has(product.model)),
}, null, 2));
console.log(`Prepared ${rows.length} new draft products.`);
