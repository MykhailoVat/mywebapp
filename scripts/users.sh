#!/bin/bash

set -e

APP_DIR="/opt/mywebapp"
GROUP="operator"

APP_USER="app"
OPERATOR="operator"
TEACHER="teacher"
STUDENT="student"

# Паролі
OPERATOR_PASS="12345678"
TEACHER_PASS="12345678"
STUDENT_PASS="student123"

DEFAULT_USER=$(awk -F: '$3 >= 1000 {print $1}' /etc/passwd)

sudo useradd -r -s /bin/bash $APP_USER
sudo useradd -m -g $GROUP -s /bin/bash $OPERATOR
sudo useradd -m -s /bin/bash $TEACHER
sudo useradd -m -s /bin/bash $STUDENT

echo "$OPERATOR:$OPERATOR_PASS" | sudo chpasswd
echo "$TEACHER:$TEACHER_PASS" | sudo chpasswd
echo "$STUDENT:$STUDENT_PASS" | sudo chpasswd

sudo chage -d 0 $OPERATOR
sudo chage -d 0 $TEACHER

SUDO_FILE="/etc/sudoers.d/operator"

sudo bash -c "cat > $SUDO_FILE" <<EOF
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl start mywebapp.socket
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl stop mywebapp.socket
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl status mywebapp.socket
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl restart mywebapp.socket
$OPERATOR ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
EOF

sudo chmod 440 $SUDO_FILE

sudo mkdir -p $APP_DIR
sudo chown -R $APP_USER:$APP_USER $APP_DIR
sudo chmod -R 750 $APP_DIR

#sudo usermod -L $DEFAULT_USER

