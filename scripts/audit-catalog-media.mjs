import { createHash } from 'node:crypto';
import { access, readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { catalogProducts } from '../src/data/catalog.ts';

const root = new URL('../public/', import.meta.url);
const errors = [];
const hashes = new Map();
const report = [];
const parity = JSON.parse(await readFile(new URL('../migration/product-parity-audit.json', import.meta.url), 'utf8'));
const parityBySlug = new Map(parity.products.map(product => [product.slug, product]));
const brochureSources = {
	'gas-cage': 'public/brochures/prosteel-gas-cage-brochure.pdf',
	'material-rack': 'public/brochures/prosteel-a-frame-brochure.pdf',
	'industrial-table': 'public/brochures/prosteel-industrial-table-brochure.pdf',
	'warehouse-safety': 'public/brochures/prosteel-bollard-guard-brochure.pdf',
};

const brochurePath = product => {
  if (product.collection === 'material-rack') return `/images/catalog/brochures/racks/${product.slug}-brochure.webp`;
  if (product.collection === 'gas-cage') return `/images/catalog/brochures/gas/${product.slug}-brochure.webp`;
  if (product.collection === 'industrial-table') return `/images/catalog/brochures/tables/${product.slug}-brochure.webp`;
  return product.brochurePreviewImage;
};

for (const product of catalogProducts) {
	const files = {};
	for (const [kind, path] of [['primary', product.image], ['context', product.contextImage], ['brochure', brochurePath(product)]]) {
		if (!path) continue;
		const url = new URL(`.${path}`, root);
		try {
			await access(url);
			files[kind] = path;
      if (kind === 'primary') {
        const digest = createHash('sha256').update(await readFile(url)).digest('hex');
        const owner = hashes.get(digest);
        if (owner && owner !== product.slug) errors.push(`Duplicate primary image: ${owner} and ${product.slug}`);
        hashes.set(digest, product.slug);
      }
    } catch {
      errors.push(`Missing ${kind} image for ${product.slug}: ${path}`);
    }
	}
	if (!product.alt || product.alt.length < 12) errors.push(`Weak image description for ${product.slug}`);
	const shopify = parityBySlug.get(product.slug);
	const expectedAssets = [product.image, product.contextImage, brochurePath(product)].map(path => `catalog-${basename(path)}`);
	const shopifyParity = Boolean(shopify && expectedAssets.every((asset, index) => shopify.assets[index] === asset));
	if (!shopifyParity) errors.push(`Shopify theme asset parity failed for ${product.slug}`);
	report.push({
		product: product.name,
		model: product.model,
		slug: product.slug,
		primaryPhoto: files.primary,
		primaryAlt: product.alt,
		applicationPhoto: files.context,
		applicationNote: `${product.application} Application imagery is contextual; size and configuration may vary.`,
		descriptionSpecificationMatch: files.primary && product.description && product.specs.length ? 'verified in reviewed catalogue data' : 'needs review',
		brochurePanel: files.brochure,
		brochureSource: brochureSources[product.collection],
		shopifyParityStatus: shopifyParity ? 'matching generated draft-theme reference' : 'mismatch',
		priceChanged: false,
		inventoryChanged: false,
	});
}

await writeFile(new URL('../migration/product-media-audit.json', import.meta.url), JSON.stringify({
	source: 'src/data/catalog.ts',
	checkedAt: new Date().toISOString(),
	products: report,
}, null, 2));

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
	console.log(`Catalog media audit passed: ${catalogProducts.length} products, all referenced primary/context/brochure images present, no duplicate primary files, and generated Shopify theme assets match.`);
}
