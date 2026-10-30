import os
from PIL import Image

src_path = r"C:\Users\adhua\.gemini\antigravity\brain\c5a4f290-040e-4640-9b3a-63cfcaa8fdc4\.user_uploaded\media_1793340865565_aded3ca4.jpg"
im = Image.open(src_path)
w, h = im.size
print(f"Loaded image {w}x{h}")

base_dir = r"d:\Aleef\rice\public\images"
os.makedirs(base_dir, exist_ok=True)
os.makedirs(os.path.join(base_dir, "products"), exist_ok=True)
os.makedirs(os.path.join(base_dir, "hero"), exist_ok=True)
os.makedirs(os.path.join(base_dir, "sections"), exist_ok=True)

# 1. Hero visual (right side of home hero with AS Associates sack, bowls, landscape)
# Home hero runs approx x: 8 to 395, y: 10 to 220
hero_visual = im.crop((165, 30, 395, 220))
hero_visual.save(os.path.join(base_dir, "hero", "hero-commodities.jpg"), quality=95)

# 2. Kerala landscape banner "From Kerala to the World"
# In Home Page: approx x: 8 to 395, y: 420 to 500
kerala_banner = im.crop((8, 420, 395, 500))
kerala_banner.save(os.path.join(base_dir, "sections", "kerala-world-banner.jpg"), quality=95)

# 3. Product items from Home page product section
# Products grid: approx x: 15 to 390, y: 275 to 415
# Row 1 (y: ~285 to ~345):
# col 1: Biriyani Rice Kaima (x: ~25 to ~85)
# col 2: Vadi Matta (x: ~85 to ~145)
# col 3: Kuruva Rice (x: ~145 to ~205)
# col 4: Palakkadan Matta (x: ~205 to ~265)
# col 5: Sugar (x: ~265 to ~325)
# col 6: Jaggery (x: ~325 to ~385)

# Row 2 (y: ~350 to ~412):
# col 1: Coconut Oil
# col 2: Virgin Coconut Oil
# col 3: Kashmiri Chilli
# col 4: T Dal
# col 5: M Dal
# col 6: Cherupayar

products_coords = {
    "biriyani-rice-kaima": (25, 287, 83, 345),
    "vadi-matta-jyothi": (84, 287, 142, 345),
    "kuruva-rice": (144, 287, 202, 345),
    "palakkadan-matta": (204, 287, 262, 345),
    "sugar": (264, 287, 322, 345),
    "jaggery": (324, 287, 382, 345),
    "coconut-oil": (25, 350, 83, 412),
    "virgin-coconut-oil": (84, 350, 142, 412),
    "kashmiri-chilli": (144, 350, 202, 412),
    "toor-dal": (204, 350, 262, 412),
    "moong-dal": (264, 350, 322, 412),
    "cherupayar": (324, 350, 382, 412)
}

for name, box in products_coords.items():
    cropped = im.crop(box)
    cropped.save(os.path.join(base_dir, "products", f"{name}.jpg"), quality=95)

# 4. Product Detail large bowl (Biriyani Rice - Kaima)
# Top-right panel: approx x: 825 to 980, y: 65 to 145
product_detail_hero = im.crop((825, 60, 980, 150))
product_detail_hero.save(os.path.join(base_dir, "products", "detail-kaima-rice.jpg"), quality=95)

# 5. About Us warehouse & truck visual
# Top-middle panel: approx x: 535 to 600, y: 105 to 180
about_truck = im.crop((525, 105, 605, 185))
about_truck.save(os.path.join(base_dir, "sections", "about-warehouse-truck.jpg"), quality=95)

# 6. About Us / Markets green landscape
# Top-middle lower: approx x: 405 to 608, y: 380 to 465
paddy_field = im.crop((405, 380, 608, 470))
paddy_field.save(os.path.join(base_dir, "sections", "kerala-paddy-field.jpg"), quality=95)

# 7. Markets & Export shipping port
# Bottom-left: approx x: 8 to 395, y: 790? Wait, let's check y coordinates for bottom
# Total height is 682!
# Let's check Markets & Export banner at bottom-left:
# y: ~515 to ~675, x: ~8 to ~395
markets_banner = im.crop((8, 515, 395, 675))
markets_banner.save(os.path.join(base_dir, "sections", "markets-export-ship.jpg"), quality=95)

# 8. Contact harvest visual
# Bottom-middle: approx x: 403 to 675, y: 505 to 675
contact_harvest = im.crop((405, 600, 530, 670))
contact_harvest.save(os.path.join(base_dir, "sections", "contact-harvest.jpg"), quality=95)

print("Crops saved successfully!")

