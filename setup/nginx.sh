#!/bin/bash
set -e

envsubst < configs/mywebapp.template > configs/mywebapp

cp configs/mywebapp /etc/nginx/sites-available/
ln -sf /etc/nginx/sites-available/mywebapp /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t

systemctl reload nginx

echo "NGINX SCRIPT DONE"

