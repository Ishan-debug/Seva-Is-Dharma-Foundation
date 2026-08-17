#!/usr/bin/env bash

set -o errexit

cd backend

python manage.py collectstatic --no-input

python manage.py migrate