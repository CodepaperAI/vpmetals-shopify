#!/usr/bin/env python3
"""Restore catalogue panel previews from the supplied original brochure artwork."""

from __future__ import annotations

import subprocess
import tempfile
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent.parent
PDFTOPPM = Path(
    "/Users/udaypatel/.cache/codex-runtimes/codex-primary-runtime/"
    "dependencies/native/poppler/bin/pdftoppm"
)

GAS_PAGES = {
    "pse-20-33-2": 3,
    "pse-20-33-4": 4,
    "pse-20-33-6": 5,
    "pse-100-20-8-18": 6,
    "pse-33-12": 7,
    "pse-20-24": 8,
    "pse-20-12": 9,
    "pse-33-18": 10,
    "pse-33-8": 11,
    "pse-20-18": 12,
    "pse-33-147-8-4": 13,
    "pse-147-7-8": 14,
    "pse-147-7-20": 15,
    "pse-147-7-16": 16,
    "pse-al-147-7-16": 17,
    "pse-fwb": 18,
    "model-420-1": 19,
}

RACK_SECTIONS = {
    "economy-a-frame": (3, "top"),
    "single-sided-a-frame": (3, "bottom"),
    "heavy-duty-a-frame": (4, "top"),
    "double-sided-transport-rack": (4, "bottom"),
    "modular-transport-rack": (5, "top"),
    "mobile-a-frame": (5, "bottom"),
    "stone-fabrication-a-frame": (6, "top"),
    "mobile-l-frame": (6, "bottom"),
    "solo-shelf-rack": (7, "top"),
    "one-side-l-frame": (7, "bottom"),
    "one-side-frame-narrow-warehouse": (8, "top"),
    "heavy-duty-double-sided-a-frame": (8, "bottom"),
    "heavy-duty-bundle-slab-rack-standard": (9, "top"),
    "multi-purpose-slab-rack": (9, "bottom"),
    # Page 10 is a single full-page panel, not one half of a two-product spread.
    "heavy-duty-bundle-slab-rack": (10, "full"),
}

TABLE_SECTIONS = {
    "heavy-duty-mobile-transport-frame": (3, "top"),
    "three-tier-triple-stacker-table": (3, "bottom"),
    "heavy-duty-industrial-platform-cart": (4, "top"),
    "garment-production-utility-cart": (4, "bottom"),
    "heavy-duty-six-wheel-work-table": (5, "top"),
    "heavy-duty-steel-workbench": (5, "bottom"),
    "industrial-mobile-workbench": (6, "top"),
    "three-tier-heavy-duty-mobile-assembly-workbench": (6, "bottom"),
    "large-heavy-duty-industrial-platform-cart": (7, "top"),
    "mobile-glass-handling-table": (7, "bottom"),
    "heavy-duty-industrial-metal-top-platform-cart": (8, "top"),
    "mobile-electronics-workstation": (8, "bottom"),
    "heavy-duty-two-tier-service-cart-stainless-steel": (9, "top"),
    "butchers-meat-cutting-table-stainless-steel": (9, "bottom"),
    "heavy-duty-16-ga-cutting-table": (10, "top"),
    "commercial-pizza-prep-table": (10, "bottom"),
}

SAFETY_SECTIONS = {
    "heavy-duty-bollard-bolt-down": (3, "top"),
    "overhead-door-track-protector": (3, "bottom"),
    "heavy-duty-mid-rail-machine-guard": (4, "top"),
    "rack-protector": (4, "bottom"),
    "pallet-rack-guard-end": (5, "top"),
    "upright-protector": (5, "bottom"),
    "floor-angle-guard-warehouse": (6, "top"),
    "anti-theft-parking-bollard-collapsible": (6, "bottom"),
}


def render_page(pdf: Path, page: int, work: Path) -> Image.Image:
    stem = work / f"{pdf.stem}-{page}"
    subprocess.run(
        [str(PDFTOPPM), "-f", str(page), "-singlefile", "-png", "-r", "160", str(pdf), str(stem)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    with Image.open(stem.with_suffix(".png")) as opened:
        return opened.convert("RGB")


def save_panel(image: Image.Image, output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, "WEBP", quality=92, method=6)


def split_panel(artwork: Image.Image, half: str) -> Image.Image:
    """Keep the complete artwork and feature strip, with a small safe margin."""
    if half == "full":
        return artwork
    if half == "top":
        return artwork.crop((0, 0, artwork.width, round(artwork.height * 0.468)))
    return artwork.crop(
        (0, round(artwork.height * 0.472), artwork.width, round(artwork.height * 0.914))
    )


def restore_split_family(
    pdf: Path, sections: dict[str, tuple[int, str]], output_dir: Path, work: Path
) -> None:
    rendered: dict[int, Image.Image] = {}
    for slug, (page, half) in sections.items():
        artwork = rendered.setdefault(page, render_page(pdf, page, work))
        save_panel(split_panel(artwork, half), output_dir / f"{slug}-brochure.webp")


def main() -> None:
    gas_pdf = ROOT / "public/brochures/prosteel-gas-cage-brochure.pdf"
    rack_pdf = ROOT / "public/brochures/prosteel-a-frame-brochure.pdf"
    table_pdf = ROOT / "public/brochures/prosteel-industrial-table-brochure.pdf"
    safety_pdf = ROOT / "public/brochures/prosteel-bollard-guard-brochure.pdf"

    with tempfile.TemporaryDirectory(prefix="prosteel-brochures-") as temp:
        work = Path(temp)

        for slug, page in GAS_PAGES.items():
            artwork = render_page(gas_pdf, page, work)
            # The September 12 brochure already contains the approved one-year warranty.
            # Preserve the complete page so no image, specification, or warranty text is cut.
            save_panel(artwork, ROOT / f"public/images/catalog/brochures/gas/{slug}-brochure.webp")

        restore_split_family(
            rack_pdf,
            RACK_SECTIONS,
            ROOT / "public/images/catalog/brochures/racks",
            work,
        )
        restore_split_family(
            table_pdf,
            TABLE_SECTIONS,
            ROOT / "public/images/catalog/brochures/tables",
            work,
        )

        rendered_safety: dict[int, Image.Image] = {}
        for group, (page, half) in SAFETY_SECTIONS.items():
            artwork = rendered_safety.setdefault(page, render_page(safety_pdf, page, work))
            crop = split_panel(artwork, half)
            save_panel(crop, ROOT / f"public/images/catalog/brochures/safety/{group}-brochure.webp")

    count = len(GAS_PAGES) + len(RACK_SECTIONS) + len(TABLE_SECTIONS) + len(SAFETY_SECTIONS)
    print(f"Restored {count} original brochure panels with text-safe crops.")


if __name__ == "__main__":
    main()
