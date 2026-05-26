#!/bin/bash
set -e

envsubst < configs/config.template.json > configs/config.json

mkdir /etc/mywebapp
cp configs/config.json /etc/mywebapp/

chown -R root:app /etc/mywebapp/
chmod 640 /etc/mywebapp/config.json
chmod 750 /etc/mywebapp

echo "CONFIG SCRIPT DONE"