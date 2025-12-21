#!/usr/bin/env bash
# Exit on error
set -o errexit

# Exit on error
set -o errexit

# Build Backend
echo "Building Backend..."
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Apply migrations
# Apply migrations
python manage.py migrate

# Create superuser if env vars are present (Optional/Convenience)
if [[ -n "$DJANGO_SUPERUSER_USERNAME" && -n "$DJANGO_SUPERUSER_PASSWORD" ]]; then
    python manage.py createsuperuser --noinput || echo "Superuser creation failed or already exists"
fi
