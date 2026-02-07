#!/usr/bin/env python3
"""Convert client logos to uniform white on transparent background."""

from PIL import Image
import os

PUBLIC = os.path.expanduser("~/kodra-conseil/public")
OUT = os.path.join(PUBLIC, "clients")

# Client logos: (source_filename, output_name)
LOGOS = [
    ("agnico-eagle-black.png", "agnico-eagle.png"),
    ("815-30167 - À utiliser.png", "desjardins.png"),
    ("Cegep_at_Logo_Couleurs_Rgb_500px_72ppir508563128093333875769673218420822854885691103771r.png", "cegep-at.png"),
    ("2308-CLD-Refonte Logo_hor_noir.png", "cld-rouyn-noranda.png"),
    ("Logo-Ville-de-La-Sarre-2024-NOIR.png", "ville-la-sarre.png"),
    ("ccirn.jpg", "ccirn.png"),
    ("groupement-coop-forestier-2.png", "groupement-forestier.png"),
    ("acee_logo_transparent.png", "acee.png"),
    ("ActionReussite.png.webp", "action-reussite.png"),
    ("Adria-Power-Systems1.png", "adria-power.png"),
    ("Asset-7Logos.png", "chambre-commerce-valdor.png"),
    ("hori4.jpg", "crcatnq.png"),
    ("images-1.jpeg", "miniere.png"),
    ("images-1.png", "miiro.png"),
    ("images-2.png", "upa.png"),
    ("images.jpeg", "chambre-commerce-amos.png"),
    ("images.png", "reseau-libre-savoir.png"),
    ("logo_CSSS2020.png", "css-lac-abitibi.png"),
    ("medium_no_pad_SDBJ_diapo_couleur.png", "sdbj.png"),
    ("Place_aux_jeunes_en_region_Logo_255x158.png", "place-aux-jeunes.png"),
    ("sdem-horizontal.png", "sdem.png"),
    ("logo-clda.jpg", "cld-abitibi.png"),
    ("43ef2d021f694efd34538609606c80e8b7093b3f.jpg", "css-harricana.png"),
]

TARGET_HEIGHT = 80  # px for consistent display


def to_white_on_transparent(img_path, out_path):
    """Convert any logo to white pixels on transparent background."""
    img = Image.open(img_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # Determine if pixel is "background" (near-white or transparent)
            is_bg = (a < 30) or (r > 230 and g > 230 and b > 230)
            if is_bg:
                pixels[x, y] = (255, 255, 255, 0)
            else:
                # Compute luminance to preserve shape/weight
                # Darker original pixels = more opaque white
                lum = 0.299 * r + 0.587 * g + 0.114 * b
                # Invert: dark pixels become fully opaque white,
                # light pixels become semi-transparent white
                new_alpha = int((1 - lum / 255) * 255)
                # Combine with original alpha
                new_alpha = int(new_alpha * (a / 255))
                # Clamp
                new_alpha = max(0, min(255, new_alpha))
                pixels[x, y] = (255, 255, 255, new_alpha)

    # Crop to content (non-transparent bounding box)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    # Resize to target height, maintaining aspect ratio
    w, h = img.size
    if h > 0:
        ratio = TARGET_HEIGHT / h
        new_w = int(w * ratio)
        img = img.resize((new_w, TARGET_HEIGHT), Image.LANCZOS)

    img.save(out_path, "PNG")
    print(f"  OK: {os.path.basename(out_path)} ({img.size[0]}x{img.size[1]})")


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for src, dst in LOGOS:
        src_path = os.path.join(PUBLIC, src)
        dst_path = os.path.join(OUT, dst)
        if not os.path.exists(src_path):
            print(f"  SKIP (not found): {src}")
            continue
        try:
            to_white_on_transparent(src_path, dst_path)
        except Exception as e:
            print(f"  ERROR: {src} -> {e}")
    print(f"\nDone! {len(os.listdir(OUT))} logos in {OUT}")
