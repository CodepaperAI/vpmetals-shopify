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


def main() -> None:
    gas_pdf = ROOT / "public/brochures/prosteel-gas-cage-brochure.pdf"
    safety_pdf = ROOT / "public/brochures/prosteel-bollard-guard-brochure.pdf"

    with tempfile.TemporaryDirectory(prefix="prosteel-brochures-") as temp:
        work = Path(temp)

        for slug, page in GAS_PAGES.items():
            artwork = render_page(gas_pdf, page, work)
            # Keep the original logo, heading, product artwork, model, and callouts.
            # Exclude the lower warranty copy because the approved website warranty is one year.
            crop = artwork.crop((0, 0, artwork.width, round(artwork.height * 0.73)))
            save_panel(crop, ROOT / f"public/images/catalog/brochures/gas/{slug}-brochure.webp")

        rendered_safety: dict[int, Image.Image] = {}
        for group, (page, half) in SAFETY_SECTIONS.items():
            artwork = rendered_safety.setdefault(page, render_page(safety_pdf, page, work))
            if half == "top":
                crop = artwork.crop((0, 0, artwork.width, round(artwork.height * 0.455)))
            else:
                crop = artwork.crop((0, round(artwork.height * 0.465), artwork.width, round(artwork.height * 0.93)))
            save_panel(crop, ROOT / f"public/images/catalog/brochures/safety/{group}-brochure.webp")

    print(f"Restored {len(GAS_PAGES) + len(SAFETY_SECTIONS)} original brochure panels.")


if __name__ == "__main__":
    main()
