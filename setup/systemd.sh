#!/bin/bash
set -e

mkdir /etc/systemd/system/mywebapp
cp configs/mywebapp.service /etc/systemd/system/

envsubst < configs/mywebapp.socket.template > configs/mywebapp.socket
cp configs/mywebapp.socket /etc/systemd/system/

systemctl daemon-reload
systemctl start mywebapp.socket
systemctl enable mywebapp.socket

echo "SYSTEMD SCRIPT DONE"