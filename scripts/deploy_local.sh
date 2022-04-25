#!/bin/bash

BASE_DIR=/Users/MFU/projects/private/swimcloud/frontend2
TEMP_DIR=/tmp
REMOTE_TMP=/tmp
NGINX_DIR=/usr/share/nginx/html
APP_NAME=frontend
REMOTE_SERVER_NAME=swim
REMOTE_SERVER_USER=pi

cd $BASE_DIR

# build
npm run build

cd build
tar -cvzf $TEMP_DIR/${APP_NAME}.tar.gz *
scp $TEMP_DIR/${APP_NAME}.tar.gz ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME}:${REMOTE_TMP}
rm $TEMP_DIR/${APP_NAME}.tar.gz

ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} sudo ls ${REMOTE_TMP}/${APP_NAME}.tar.gz
ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} sudo rm -rf ${NGINX_DIR}/${APP_NAME}
ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} sudo mkdir ${NGINX_DIR}/${APP_NAME}
ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} sudo tar -xvzf ${REMOTE_TMP}/${APP_NAME}.tar.gz -C ${NGINX_DIR}/${APP_NAME}
ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} sudo rm ${REMOTE_TMP}/${APP_NAME}.tar.gz

echo "copy to shared dir ${NGINX_DIR}/${APP_NAME}"
ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} sudo cp -rf ${NGINX_DIR}/${APP_NAME}/* /opt/shared/vm/frontend