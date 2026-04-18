#!/bin/bash
set -e

apt update
apt upgrade -y
apt install -y nginx nodejs npm postgresql docker.io docker-compose-plugin

systemctl enable docker
systemctl start docker

sudo -u postgres psql -c "CREATE DATABASE app;"
sudo -u postgres psql -c "CREATE USER myuser WITH PASSWORD 'pass';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE app TO myuser;"
sudo -u postgres psql -d app -c "GRANT ALL ON SCHEMA public TO myuser;"

cd /opt/mywebapp
#install as root, then give rights back to app
npm install
chown -R app:app "/opt/mywebapp"

echo "INSTALL SCRIPT DONE"

