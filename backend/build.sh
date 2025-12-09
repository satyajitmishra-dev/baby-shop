#!/usr/bin/env bash
# Exit on error
set -o errexit

# Build CMS Frontend
echo "Building Frontend..."
cd ../frontend
npm install
npm run build
cd ../backend

# Build Backend
echo "Building Backend..."
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Apply migrations
python manage.py migrate
