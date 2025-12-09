from rest_framework import serializers
from .models import Order, OrderItem
from apps.products.serializers import ProductSerializer

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'price', 'quantity']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'first_name', 'last_name', 'email', 'phone', 'address', 'city', 'postal_code', 'country', 'created_at', 'total_price', 'is_paid', 'items']
        read_only_fields = ['user', 'created_at', 'total_price', 'is_paid']
