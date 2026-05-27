#!/bin/bash
set -e

export APP_HOST="$APP_HOST_BARE"
export DB_HOST="$DB_HOST_BARE"
envsubst < configs/config.template.json > configs/config.json

export APP_HOST="$APP_HOST_DOCKER"
export DB_HOST="$DB_HOST_DOCKER"
envsubst < configs/config.template.json > ../docker_configs/config.json


mkdir /etc/mywebapp
cp configs/config.json /etc/mywebapp/

chown -R root:app /etc/mywebapp/
chmod 640 /etc/mywebapp/config.json
chmod 750 /etc/mywebapp

echo "CONFIG SCRIPT DONE"