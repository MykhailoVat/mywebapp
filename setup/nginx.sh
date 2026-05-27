#!/bin/bash
set -e

export APP_HOST="$APP_HOST_BARE"
envsubst '${APP_HOST} ${APP_PORT}' < configs/mywebapp.template > configs/mywebapp

cp configs/mywebapp /etc/nginx/sites-available/
ln -sf /etc/nginx/sites-available/mywebapp /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t

systemctl reload nginx

echo "NGINX SCRIPT DONE"

