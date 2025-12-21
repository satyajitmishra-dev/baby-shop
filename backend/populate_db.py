import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'baby_shop.settings')
django.setup()

from apps.products.models import Category, Product
from apps.users.models import CustomUser

def populate():
    # Create Superuser
    if not CustomUser.objects.filter(email='admin@baby.com').exists():
        CustomUser.objects.create_superuser('admin', 'admin@baby.com', 'password123')
        print("Superuser created: admin@baby.com / password123")
    else:
        print("Superuser already exists")

    # Create Categories
    from django.core.files.base import ContentFile
    import urllib.request

    cats_data = [
        {'name': 'Clothing', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484?w=500&q=80'},
        {'name': 'Toys', 'image': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80'},
        {'name': 'Essentials', 'image': 'https://images.unsplash.com/photo-1515488042361-ee00651a6a14?w=500&q=80'},
        {'name': 'Care', 'image': 'https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&q=80'},
        {'name': 'Gear', 'image': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80'},
        {'name': 'Feeding', 'image': 'https://images.unsplash.com/photo-1588647000850-25696d51d536?w=500&q=80'},
        {'name': 'Furniture', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484?w=500&q=80'},
        {'name': 'Bedding', 'image': 'https://images.unsplash.com/photo-1515488042361-ee00651a6a14?w=500&q=80'},
    ]
    categories = {}
    for c_data in cats_data:
        c_name = c_data['name']
        cat, created = Category.objects.get_or_create(name=c_name, defaults={'slug': c_name.lower()})
        
        if not cat.image and c_data['image']:
            try:
                print(f"Downloading image for {c_name}...")
                img_url = c_data['image']
                result = urllib.request.urlretrieve(img_url)
                cat.image.save(f"{c_name.lower()}.jpg", ContentFile(open(result[0], 'rb').read()), save=True)
                print(f"Image saved for {c_name}")
            except Exception as e:
                print(f"Failed to save image for {c_name}: {e}")

        categories[c_name] = cat
        if created: print(f"Category {c_name} created")

    # Create Products
    products_data = [
        {'name': 'Organic Cotton Onesie', 'price': 1299, 'cat': 'Clothing', 'slug': 'onesie', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484?w=500&q=80'},
        {'name': 'Wooden Stacking Toy', 'price': 2499, 'cat': 'Toys', 'slug': 'stacking-toy', 'image': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80'},
        {'name': 'Soft Plush Bear', 'price': 1599, 'cat': 'Toys', 'slug': 'plush-bear', 'image': 'https://images.unsplash.com/photo-1559454403-b8fb87521bc7?w=500&q=80'},
        {'name': 'Baby Stroller', 'price': 15999, 'cat': 'Gear', 'slug': 'baby-stroller', 'image': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80'},
        {'name': 'Knitted Baby Booties', 'price': 899, 'cat': 'Clothing', 'slug': 'knitted-booties', 'image': 'https://images.unsplash.com/photo-1515488042361-ee00651a6a14?w=500&q=80'},
        {'name': 'Baby Monitor', 'price': 4500, 'cat': 'Gear', 'slug': 'baby-monitor', 'image': 'https://plus.unsplash.com/premium_photo-1663045242379-3743ec922976?w=500&q=80'},
        {'name': 'Diaper Changing Mat', 'price': 1200, 'cat': 'Care', 'slug': 'changing-mat', 'image': 'https://images.unsplash.com/photo-1556228720-192752912a72?w=500&q=80'},
        {'name': 'Gentle Baby Shampoo', 'price': 499, 'cat': 'Care', 'slug': 'baby-shampoo', 'image': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80'},
        {'name': 'Silicone Bib Set', 'price': 799, 'cat': 'Essentials', 'slug': 'silicone-bibs', 'image': 'https://images.unsplash.com/photo-1588647000850-25696d51d536?w=500&q=80'},
        {'name': 'Baby Bottle Set', 'price': 1899, 'cat': 'Essentials', 'slug': 'bottle-set', 'image': 'https://images.unsplash.com/photo-1616428753229-43c3d528b753?w=500&q=80'},
        {'name': 'Crib Mobile', 'price': 2299, 'cat': 'Toys', 'slug': 'crib-mobile', 'image': 'https://images.unsplash.com/photo-1515488042361-ee00651a6a14?w=500&q=80'},
        {'name': 'Cozy Sleep Sack', 'price': 1499, 'cat': 'Clothing', 'slug': 'sleep-sack', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484?w=500&q=80'},
        {'name': 'Modern High Chair', 'price': 8999, 'cat': 'Feeding', 'slug': 'high-chair', 'image': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80'},
        {'name': 'Silicone Suction Bowl', 'price': 599, 'cat': 'Feeding', 'slug': 'suction-bowl', 'image': 'https://images.unsplash.com/photo-1588647000850-25696d51d536?w=500&q=80'},
        {'name': 'Baby Food Maker', 'price': 4500, 'cat': 'Feeding', 'slug': 'food-maker', 'image': 'https://images.unsplash.com/photo-1556228720-192752912a72?w=500&q=80'},
        {'name': 'Convertible Crib', 'price': 15999, 'cat': 'Furniture', 'slug': 'convertible-crib', 'image': 'https://images.unsplash.com/photo-1555009365-513638d017b3?w=500&q=80'}, # Found a likely better furniture ID
        {'name': 'Nursing Rocking Chair', 'price': 12500, 'cat': 'Furniture', 'slug': 'rocking-chair', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484?w=500&q=80'}, # Fallback
        {'name': 'Dresser with Changing Top', 'price': 18999, 'cat': 'Furniture', 'slug': 'dresser-changing', 'image': 'https://images.unsplash.com/photo-1556228720-192752912a72?w=500&q=80'},
        {'name': 'Organic Muslin Swaddle', 'price': 899, 'cat': 'Bedding', 'slug': 'muslin-swaddle', 'image': 'https://images.unsplash.com/photo-1515488042361-ee00651a6a14?w=500&q=80'},
        {'name': 'Fitted Crib Sheet', 'price': 699, 'cat': 'Bedding', 'slug': 'crib-sheet', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484?w=500&q=80'},
        {'name': 'Wearable Blanket', 'price': 1299, 'cat': 'Bedding', 'slug': 'wearable-blanket', 'image': 'https://images.unsplash.com/photo-1515488042361-ee00651a6a14?w=500&q=80'},
        {'name': 'Plush Nursery Rug', 'price': 3500, 'cat': 'Furniture', 'slug': 'nursery-rug', 'image': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80'},
    ]

    for p in products_data:
        obj, created = Product.objects.get_or_create(
            name=p['name'],
            defaults={
                'slug': p['slug'],
                'price': p['price'],
                'category': categories[p['cat']],
                'stock': 100,
                'description': f"Premium quality {p['name']} for your baby.",
                'is_new': True
            }
        )
        
        if not obj.image and p.get('image'):
             try:
                print(f"Downloading image for {p['name']}...")
                img_url = p['image']
                result = urllib.request.urlretrieve(img_url)
                obj.image.save(f"{p['slug']}.jpg", ContentFile(open(result[0], 'rb').read()), save=True)
                print(f"Image saved for {p['name']}")
             except Exception as e:
                print(f"Failed to save image for {p['name']}: {e}")

        if created: print(f"Product {p['name']} created")
        else: print(f"Product {p['name']} exists")

if __name__ == '__main__':
    populate()
