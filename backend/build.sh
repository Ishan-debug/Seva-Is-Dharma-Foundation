#!/usr/bin/env bash

set -e

echo "========================================"
echo "Checking Razorpay environment"
echo "========================================"

python -c "import os; print('RAZORPAY_KEY_ID present:', bool(os.getenv('RAZORPAY_KEY_ID'))); print('RAZORPAY_KEY_SECRET present:', bool(os.getenv('RAZORPAY_KEY_SECRET')))"

echo "========================================"
echo "Installing dependencies"
echo "========================================"

pip install -r requirements.txt

echo "========================================"
echo "Collecting static files"
echo "========================================"

python manage.py collectstatic --noinput

echo "========================================"
echo "Running migrations"
echo "========================================"

python manage.py migrate

echo "========================================"
echo "Build completed"
echo "========================================"