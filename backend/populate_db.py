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
    cats = ['Clothing', 'Toys', 'Essentials', 'Care', 'Gear']
    categories = {}
    for c in cats:
        cat, created = Category.objects.get_or_create(name=c, slug=c.lower())
        categories[c] = cat
        if created: print(f"Category {c} created")

    # Create Products
    products_data = [
        {'name': 'Organic Cotton Onesie', 'price': 1299, 'cat': 'Clothing', 'slug': 'onesie', 'image': 'https://images.unsplash.com/photo-1522771753035-4203ae575484'}, # External URL might not work with ImageField directly, but for now just validation
        {'name': 'Wooden Stacking Toy', 'price': 2499, 'cat': 'Toys', 'slug': 'stacking-toy', 'image': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1'},
    ]

    for p in products_data:
        obj, created = Product.objects.get_or_create(
            name=p['name'],
            defaults={
                'slug': p['slug'],
                'price': p['price'],
                'category': categories[p['cat']],
                'stock': 100,
                'description': 'Premium quality product for your baby.',
                'is_new': True
            }
        )
        if created: print(f"Product {p['name']} created")
        else: print(f"Product {p['name']} exists")

if __name__ == '__main__':
    populate()
