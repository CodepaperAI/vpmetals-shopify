import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { catalogProducts } from '../src/data/catalog.ts';

const remote = JSON.parse(await readFile(new URL('../tmp/shopify-product-details.json', import.meta.url), 'utf8'));
const esc = s => String(s ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const literal = s => JSON.stringify(String(s));
const cases = [];
const updates = [];
const audit = [];
const families = {'gas-cage':'gas-cage','material-rack':'a-frame','industrial-table':'industrial-table','warehouse-safety':'bollard-guard'};
for (const p of catalogProducts) {
  const r = remote.find(r => r.handle === p.slug || r.title === p.model || r.title === `PSE ${p.model}`);
  if (!r) throw new Error(`Missing Shopify product ${p.slug}`);
  if (Number(r.variants[0].price) !== p.price) throw new Error(`Price mismatch ${p.slug}`);
  const folder = {'gas-cage':'gas','material-rack':'racks','industrial-table':'tables','warehouse-safety':'safety'}[p.collection];
  const brochure = p.brochurePreviewImage || `/images/catalog/brochures/${folder}/${p.slug}-brochure.webp`;
  const assets = [];
  for (const path of [p.image, p.contextImage, brochure]) {
    const name = `catalog-${basename(path)}`;
    await copyFile(new URL(`../public${path}`, import.meta.url), new URL(`../shopify-theme/assets/${name}`, import.meta.url));
    assets.push(name);
  }
  const specs = `<h2>Specifications</h2><dl>${p.specs.map(s=>`<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join('')}</dl>`;
  const body = `<p>${esc(p.description)}</p><h3>Model</h3><p>${esc(p.model)}</p><h3>Specifications</h3><ul>${p.specs.map(s=>`<li><strong>${esc(s.label)}:</strong> ${esc(s.value)}</li>`).join('')}</ul><h3>Applications</h3><p>${esc(p.application)}</p><h3>Features</h3><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>`;
  updates.push({id:r.id,title:p.name,descriptionHtml:body});
  cases.push(`{% when ${literal(r.handle)} %}\n{% assign catalog_primary = ${literal(assets[0])} %}\n{% assign catalog_context = ${literal(assets[1])} %}\n{% assign catalog_brochure = ${literal(assets[2])} %}\n{% assign catalog_category = ${literal(p.category)} %}\n{% assign catalog_model = ${literal(p.model)} %}\n{% assign catalog_description = ${literal(p.description)} %}\n{% assign catalog_alt = ${literal(p.alt)} %}\n{% assign catalog_pdf = 'prosteel-${families[p.collection]}-brochure.pdf' %}\n{% assign catalog_price_pdf = 'prosteel-${families[p.collection]}-b2c-price.pdf' %}\n{% capture catalog_specs %}${specs}{% endcapture %}\n{% capture catalog_application %}${esc(p.application)}{% endcapture %}\n{% capture catalog_features %}<ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>{% endcapture %}`);
  audit.push({slug:p.slug,handle:r.handle,id:r.id,priceCAD:p.price,shopifyPriceCAD:Number(r.variants[0].price),status:r.status,inventory:r.totalInventory,originalTitle:r.title,title:p.name,assets});
}
const mapping = `{% case product.handle %}\n${cases.join('\n')}\n{% endcase %}`;
await writeFile(new URL('../tmp/shopify-parity-cases.liquid',import.meta.url), mapping);
const snippetPath = new URL('../shopify-theme/snippets/catalog-reference.liquid', import.meta.url);
const snippet = await readFile(snippetPath, 'utf8');
await writeFile(snippetPath, snippet.replace(/{% case product.handle %}[\s\S]*?{% endcase %}/, mapping));
await writeFile(new URL('../tmp/shopify-parity-updates.json',import.meta.url),JSON.stringify(updates,null,2));
await writeFile(new URL('../migration/product-parity-audit.json',import.meta.url),JSON.stringify({source:'src/data/catalog.ts',checkedAt:new Date().toISOString(),products:audit},null,2));
console.log(`Prepared ${audit.length} matched products; all base prices match. Copied reference images and regenerated the theme mapping. Full PDFs remain on the existing brochure host.`);
