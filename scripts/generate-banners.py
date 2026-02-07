#!/usr/bin/env python3
"""Generate LinkedIn banners matching kodra.ca branding."""

from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.expanduser("~/kodra-conseil/public")
LOGO_PATH = os.path.join(OUT, "logo.png")

# Brand colors
BLUE_DARK = (11, 21, 41)
BLUE_DARK_LIGHT = (17, 29, 53)
ORANGE = (249, 115, 22)
WHITE = (255, 255, 255)
GRAY_400 = (156, 163, 175)
GRAY_500 = (107, 114, 128)

# Font paths
INTER = os.path.expanduser("~/Library/Fonts/InterVariable.ttf")


def load_font(size, bold=False):
    """Load Inter font at given size."""
    try:
        # InterVariable supports weight via variation axis
        font = ImageFont.truetype(INTER, size)
        return font
    except Exception:
        return ImageFont.load_default()


def draw_glow(draw, cx, cy, radius, color, alpha_max=25):
    """Draw a soft radial glow."""
    for i in range(radius, 0, -2):
        a = int(alpha_max * (1 - i / radius) ** 2)
        r, g, b = color
        draw.ellipse(
            [cx - i, cy - i, cx + i, cy + i],
            fill=(r, g, b, a),
        )


def draw_accent_dots(draw, x_start, y, count, spacing, color, size=3):
    """Draw a row of small dots."""
    for i in range(count):
        x = x_start + i * spacing
        draw.ellipse([x, y, x + size, y + size], fill=color)


def create_personal_banner():
    """LinkedIn personal profile banner: 1584 x 396."""
    W, H = 1584, 396
    img = Image.new("RGBA", (W, H), BLUE_DARK)
    draw = ImageDraw.Draw(img)

    # Subtle gradient overlay (darker on left where profile pic sits)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)

    # Orange glow top-right
    draw_glow(odraw, W - 200, -50, 350, ORANGE, alpha_max=20)

    # Subtle glow bottom-left
    draw_glow(odraw, 100, H + 50, 250, ORANGE, alpha_max=8)

    img = Image.alpha_composite(img, overlay)
    draw = ImageDraw.Draw(img)

    # Horizontal accent line
    line_y = H // 2
    draw.line([(420, line_y), (520, line_y)], fill=(*ORANGE, 180), width=3)

    # Accent dots
    draw_accent_dots(draw, 420, line_y + 20, 5, 12, (*ORANGE, 60), 4)

    # Text - positioned to the right (profile photo overlaps left ~300px)
    font_large = load_font(52)
    font_medium = load_font(26)
    font_small = load_font(20)
    font_url = load_font(18)

    # Main text
    text_x = 560

    draw.text(
        (text_x, 100),
        "Facilitation stratégique",
        fill=WHITE,
        font=font_large,
    )

    draw.text(
        (text_x, 165),
        "Formations en intelligence artificielle",
        fill=GRAY_400,
        font=font_medium,
    )

    # Separator line
    draw.line([(text_x, 215), (text_x + 60, 215)], fill=ORANGE, width=3)

    # Tagline
    draw.text(
        (text_x, 235),
        "Vos équipes ont les réponses. On les aide à les trouver.",
        fill=GRAY_500,
        font=font_small,
    )

    # URL
    draw.text(
        (text_x, 280),
        "kodra.ca",
        fill=(*ORANGE, 200),
        font=font_url,
    )

    # Logo top-right
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 40
    ratio = logo_h / logo.size[1]
    logo = logo.resize((int(logo.size[0] * ratio), logo_h), Image.LANCZOS)
    img.paste(logo, (W - logo.size[0] - 60, 30), logo)

    # Subtle vertical lines on the far right as decoration
    for i in range(5):
        x = W - 30 - i * 15
        alpha = 15 - i * 3
        draw.line([(x, 80), (x, H - 80)], fill=(*ORANGE, max(alpha, 3)), width=1)

    # Convert to RGB for saving as PNG
    final = Image.new("RGB", (W, H), BLUE_DARK)
    final.paste(img, (0, 0), img)
    final.save(os.path.join(OUT, "linkedin-banner-personnel.png"), "PNG")
    print(f"  OK: linkedin-banner-personnel.png ({W}x{H})")


def create_company_banner():
    """LinkedIn company page cover: 1128 x 191."""
    W, H = 1128, 191
    img = Image.new("RGBA", (W, H), BLUE_DARK)
    draw = ImageDraw.Draw(img)

    # Overlay with glow
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)

    # Orange glow right
    draw_glow(odraw, W - 100, H // 2, 250, ORANGE, alpha_max=15)

    # Subtle glow left
    draw_glow(odraw, 150, H // 2, 200, ORANGE, alpha_max=6)

    img = Image.alpha_composite(img, overlay)
    draw = ImageDraw.Draw(img)

    # Logo left-center
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 36
    ratio = logo_h / logo.size[1]
    logo = logo.resize((int(logo.size[0] * ratio), logo_h), Image.LANCZOS)
    logo_x = 80
    logo_y = (H - logo_h) // 2 - 20
    img.paste(logo, (logo_x, logo_y), logo)
    draw = ImageDraw.Draw(img)

    # Text below logo
    font_tagline = load_font(17)
    font_services = load_font(14)

    draw.text(
        (logo_x, logo_y + logo_h + 12),
        "Facilitation stratégique  ·  Formations IA",
        fill=GRAY_400,
        font=font_tagline,
    )

    draw.text(
        (logo_x, logo_y + logo_h + 38),
        "kodra.ca",
        fill=(*ORANGE, 180),
        font=font_services,
    )

    # Right side - accent elements
    # Vertical orange bar
    bar_x = W - 200
    draw.rectangle(
        [bar_x, 40, bar_x + 3, H - 40],
        fill=(*ORANGE, 60),
    )

    # Key phrases on the right
    font_right = load_font(15)
    phrases = [
        "Intelligence collective",
        "IA responsable",
        "Résultats concrets",
    ]
    for i, phrase in enumerate(phrases):
        y = 50 + i * 35
        # Small orange dot
        draw.ellipse(
            [bar_x + 16, y + 4, bar_x + 22, y + 10],
            fill=ORANGE,
        )
        draw.text(
            (bar_x + 30, y),
            phrase,
            fill=(*WHITE, 200) if i == 0 else GRAY_400,
            font=font_right,
        )

    # Subtle decorative dots top
    for i in range(8):
        x = 80 + i * 18
        draw.ellipse([x, 15, x + 3, 18], fill=(*ORANGE, 30))

    # Convert to RGB
    final = Image.new("RGB", (W, H), BLUE_DARK)
    final.paste(img, (0, 0), img)
    final.save(os.path.join(OUT, "linkedin-banner-kodra.png"), "PNG")
    print(f"  OK: linkedin-banner-kodra.png ({W}x{H})")


if __name__ == "__main__":
    create_personal_banner()
    create_company_banner()
    print("\nDone!")
