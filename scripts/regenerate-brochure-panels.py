#!/usr/bin/env python3
"""Build clean, text-free product brochure panels from verified catalogue media."""

from __future__ import annotations

import json
import subprocess
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent.parent
NODE = Path("/Users/udaypatel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node")


def load_products() -> list[dict[str, str]]:
    source = """
import { catalogProducts } from './src/data/catalog.ts';
console.log(JSON.stringify(catalogProducts.map(({slug,collection,image,contextImage,brochurePreviewImage}) => ({slug,collection,image,contextImage,brochurePreviewImage}))));
"""
    result = subprocess.run(
        [str(NODE), "--input-type=module", "-e", source],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def contain(source: Path, box: tuple[int, int]) -> Image.Image:
    with Image.open(source) as opened:
        image = opened.convert("RGB")
    image.thumbnail(box, Image.Resampling.LANCZOS)
    return image


def create_panel(primary_path: Path, context_path: Path, output_path: Path) -> None:
    panel = Image.new("RGB", (1200, 800), "white")
    primary = contain(primary_path, (550, 700))
    context = contain(context_path, (550, 700))
    panel.paste(primary, (300 - primary.width // 2, 400 - primary.height // 2))
    panel.paste(context, (900 - context.width // 2, 400 - context.height // 2))
    output_path.parent.mkdir(parents=True, exist_ok=True)
    panel.save(output_path, "WEBP", quality=90, method=6)


def main() -> None:
    folders = {
        "gas-cage": "gas",
        "material-rack": "racks",
        "industrial-table": "tables",
        "warehouse-safety": "safety",
    }
    products = load_products()
    for product in products:
        primary = ROOT / "public" / product["image"].lstrip("/")
        context = ROOT / "public" / product["contextImage"].lstrip("/")
        preview = product.get("brochurePreviewImage") or f"/images/catalog/brochures/{folders[product['collection']]}/{product['slug']}-brochure.webp"
        create_panel(primary, context, ROOT / "public" / preview.lstrip("/"))
    print(f"Regenerated {len(products)} clean brochure panels without printed headings or prices.")


if __name__ == "__main__":
    main()
