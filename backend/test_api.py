import requests
import json

BASE_URL = 'http://127.0.0.1:8000/api'

def test_api():
    # 1. Login
    print("Testing Login...")
    auth_resp = requests.post(f'{BASE_URL}/auth/token/', data={'email': 'admin@baby.com', 'password': 'password123'})
    if auth_resp.status_code == 200:
        token = auth_resp.json()['access']
        print("Login Success")
    else:
        print("Login Failed", auth_resp.text)
        return

    # 2. List Products
    print("\nTesting Product List...")
    prod_resp = requests.get(f'{BASE_URL}/products/')
    if prod_resp.status_code == 200:
        products = prod_resp.json()['results']
        print(f"Products Found: {len(products)}")
        if products:
            product_id = products[0]['id']
    else:
        print("Product List Failed", prod_resp.text)
        return

    # 3. Create Order
    print("\nTesting Create Order...")
    headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}
    order_data = {
        'first_name': 'Test',
        'last_name': 'User',
        'email': 'test@user.com',
        'phone': '1234567890',
        'address': '123 St',
        'city': 'Test City',
        'postal_code': '12345',
        'country': 'India',
        'items': [
            {'product_id': product_id, 'quantity': 2}
        ]
    }
    order_resp = requests.post(f'{BASE_URL}/orders/', json=order_data, headers=headers)
    if order_resp.status_code == 201:
        print("Order Created Success")
        print(json.dumps(order_resp.json(), indent=2))
    else:
        print("Order Create Failed", order_resp.text)

if __name__ == '__main__':
    test_api()
