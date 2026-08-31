import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import { catalogProducts } from '../src/data/catalog.ts';

const root = new URL('../public/', import.meta.url);
const errors = [];
const hashes = new Map();

const brochurePath = product => {
  if (product.collection === 'material-rack') return `/images/catalog/brochures/racks/${product.slug}-brochure.webp`;
  if (product.collection === 'gas-cage') return `/images/catalog/brochures/gas/${product.slug}-brochure.webp`;
  if (product.collection === 'industrial-table') return `/images/catalog/brochures/tables/${product.slug}-brochure.webp`;
  return product.brochurePreviewImage;
};

for (const product of catalogProducts) {
  for (const [kind, path] of [['primary', product.image], ['context', product.contextImage], ['brochure', brochurePath(product)]]) {
    if (!path) continue;
    const url = new URL(`.${path}`, root);
    try {
      await access(url);
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
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Catalog media audit passed: ${catalogProducts.length} products, all referenced primary/context/brochure images present, no duplicate primary files.`);
}
