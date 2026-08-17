import os
from pathlib import Path

from dotenv import load_dotenv
from decouple import config
import dj_database_url


# =========================================================
# BASE DIRECTORY
# =========================================================

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / ".env")


# =========================================================
# SECURITY
# =========================================================

SECRET_KEY = config("SECRET_KEY")

DEBUG = config(
    "DEBUG",
    default=False,
    cast=bool,
)


# Hosts
ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",

    # Render
    "seva-is-dharma-foundation.onrender.com",

    # Production API domain
    "api.sevaisdharmafoundation.org",

    # Main domain
    "sevaisdharmafoundation.org",
    "www.sevaisdharmafoundation.org",
]


# Render automatically provides this hostname.
render_hostname = os.getenv(
    "RENDER_EXTERNAL_HOSTNAME"
)

if render_hostname:
    ALLOWED_HOSTS.append(render_hostname)


# =========================================================
# INSTALLED APPS
# =========================================================

INSTALLED_APPS = [

    # Django
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Third Party
    "rest_framework",
    "corsheaders",

    # Local Apps
    "accounts",
    "contacts",
    "donations",
    "gallery",
    "volunteers",
]


# =========================================================
# MIDDLEWARE
# =========================================================

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",

    # Static files
    "whitenoise.middleware.WhiteNoiseMiddleware",

    # CORS
    "corsheaders.middleware.CorsMiddleware",

    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",

    "django.middleware.csrf.CsrfViewMiddleware",

    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",

    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


# =========================================================
# URL / WSGI
# =========================================================

ROOT_URLCONF = "config.urls"

WSGI_APPLICATION = "config.wsgi.application"


# =========================================================
# TEMPLATES
# =========================================================

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",

        "DIRS": [],

        "APP_DIRS": True,

        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",

                "django.contrib.auth.context_processors.auth",

                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


# =========================================================
# DATABASE
# =========================================================

DATABASES = {
    "default": dj_database_url.config(
        default=config(
            "DATABASE_URL"
        ),
        conn_max_age=600,
    )
}


# =========================================================
# PASSWORD VALIDATION
# =========================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME":
        "django.contrib.auth.password_validation."
        "UserAttributeSimilarityValidator",
    },
    {
        "NAME":
        "django.contrib.auth.password_validation."
        "MinimumLengthValidator",
    },
    {
        "NAME":
        "django.contrib.auth.password_validation."
        "CommonPasswordValidator",
    },
    {
        "NAME":
        "django.contrib.auth.password_validation."
        "NumericPasswordValidator",
    },
]


# =========================================================
# INTERNATIONALIZATION
# =========================================================

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Asia/Kolkata"

USE_I18N = True

USE_TZ = True


# =========================================================
# STATIC FILES
# =========================================================

STATIC_URL = "/static/"

STATIC_ROOT = BASE_DIR / "staticfiles"

STATICFILES_DIRS = [
    BASE_DIR / "static",
]


# =========================================================
# MEDIA FILES
# =========================================================

MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"


# =========================================================
# CORS
# =========================================================

CORS_ALLOWED_ORIGINS = [

    # Local development
    "http://localhost:3000",

    # Current Vercel deployment
    "https://seva-is-dharma-foundation.vercel.app",

    # Production domain
    "https://sevaisdharmafoundation.org",

    "https://www.sevaisdharmafoundation.org",
]


# =========================================================
# CSRF
# =========================================================

CSRF_TRUSTED_ORIGINS = [

    # Local development
    "http://localhost:3000",

    # Vercel
    "https://seva-is-dharma-foundation.vercel.app",

    # Production
    "https://sevaisdharmafoundation.org",

    "https://www.sevaisdharmafoundation.org",
]


# =========================================================
# CORS METHODS
# =========================================================

CORS_ALLOW_METHODS = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
]


# =========================================================
# CORS HEADERS
# =========================================================

CORS_ALLOW_HEADERS = [
    "accept",
    "accept-encoding",
    "authorization",
    "content-type",
    "dnt",
    "origin",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]


# =========================================================
# EMAIL
# =========================================================

EMAIL_BACKEND = (
    "django.core.mail.backends.smtp.EmailBackend"
)

EMAIL_HOST = os.getenv(
    "EMAIL_HOST"
)

EMAIL_PORT = int(
    os.getenv(
        "EMAIL_PORT",
        "465",
    )
)

EMAIL_HOST_USER = os.getenv(
    "EMAIL_HOST_USER"
)

EMAIL_HOST_PASSWORD = os.getenv(
    "EMAIL_HOST_PASSWORD"
)

EMAIL_USE_SSL = (
    os.getenv(
        "EMAIL_USE_SSL",
        "True",
    ).lower()
    == "true"
)

DEFAULT_FROM_EMAIL = os.getenv(
    "DEFAULT_FROM_EMAIL"
)


# =========================================================
# DEFAULT PRIMARY KEY
# =========================================================

DEFAULT_AUTO_FIELD = (
    "django.db.models.BigAutoField"
)


# =========================================================
# PRODUCTION SECURITY
# =========================================================

if not DEBUG:

    SECURE_SSL_REDIRECT = True

    SESSION_COOKIE_SECURE = True

    CSRF_COOKIE_SECURE = True

    SECURE_HSTS_SECONDS = 31536000

    SECURE_HSTS_INCLUDE_SUBDOMAINS = True

    SECURE_HSTS_PRELOAD = True

    SECURE_CONTENT_TYPE_NOSNIFF = True

    X_FRAME_OPTIONS = "DENY"