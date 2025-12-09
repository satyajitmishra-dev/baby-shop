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
python manage.py migrate
