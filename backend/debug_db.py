import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'baby_shop.settings')
django.setup()

from apps.products.models import Category, Product

print("--- Categories ---")
for cat in Category.objects.all():
    product_count = Product.objects.filter(category=cat).count()
    print(f"Slug: '{cat.slug}' | Count: {product_count}")
