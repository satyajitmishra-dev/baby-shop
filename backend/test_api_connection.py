import requests

try:
    url = 'http://localhost:8000/api/products/?category=clothing'
    print(f"Requesting: {url}")
    response = requests.get(url)
    print(f"Status: {response.status_code}")
    data = response.json()
    # Handle pagination
    results = data.get('results', data)
    print(f"Count: {len(results)}")
    if len(results) > 0:
        print(f"First item: {results[0]['name']}")
    else:
        print("No items found.")

except Exception as e:
    print(f"Error: {e}")
