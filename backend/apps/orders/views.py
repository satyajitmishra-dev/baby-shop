from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db import transaction
from .models import Order, OrderItem
from .serializers import OrderSerializer
from apps.products.models import Product

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    
    def get_permissions(self):
        if self.action in ['create']:
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_queryset(self):
        # Users see only their orders, admins can see all? For now restrict to own.
        # But if guest, how to see? Guest orders are write-only for now unless we track session.
        user = self.request.user
        if user.is_authenticated:
            return Order.objects.filter(user=user)
        return Order.objects.none()

    def create(self, request, *args, **kwargs):
        # Custom create to handle items and transaction
        data = request.data
        items_data = data.get('items', [])
        
        if not items_data:
            return Response({'error': 'No items provided'}, status=status.HTTP_400_BAD_REQUEST)

        with transaction.atomic():
            # Create Order
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            order = serializer.save(user=request.user if request.user.is_authenticated else None)

            total_price = 0
            
            for item in items_data:
                product_id = item.get('product_id') or item.get('product')
                quantity = item.get('quantity', 1)
                
                try:
                    product = Product.objects.get(id=product_id)
                except Product.DoesNotExist:
                     raise serializers.ValidationError(f"Product {product_id} does not exist")

                # Check stock? logic here if needed.
                
                order_item = OrderItem.objects.create(
                    order=order,
                    product=product,
                    price=product.price,
                    quantity=quantity
                )
                total_price += product.price * quantity

            order.total_price = total_price
            order.save()

            serializer = self.get_serializer(order)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
