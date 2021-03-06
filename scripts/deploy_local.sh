#!/bin/bash

BASE_DIR=/Users/MFU/projects/private/swimcloud/frontend2
TEMP_DIR=/tmp
REMOTE_TMP=/tmp
NGINX_DIR=/usr/share/nginx/html
APP_NAME=frontend
REMOTE_SERVER_NAME=ubuntu.fritz.box
REMOTE_SERVER_USER=ubuntu
SHARE_FOLDER_NAME=splash

. ../.env
. ../.env.production
echo "Connect:                        $REMOTE_SERVER_USER@$REMOTE_SERVER_NAME"
echo "Title:                          $REACT_APP_SITE_TITLE"
echo "URL connect to Socket Backend:  $REACT_APP_BACKEND_URL "
echo "Share Folder name:              $SHARE_FOLDER_NAME"

read -p "Go on (y/n)? " answer
case ${answer:0:1} in
    y|Y )
        echo ...
    ;;
    * )
        exit 0
    ;;
esac

cd $BASE_DIR

function exec_remote(){
    echo "exec $1"
    ssh ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME} $1
}

# build
npm run build

cd build
tar -cvzf $TEMP_DIR/${APP_NAME}.tar.gz *
scp $TEMP_DIR/${APP_NAME}.tar.gz ${REMOTE_SERVER_USER}@${REMOTE_SERVER_NAME}:${REMOTE_TMP}
rm $TEMP_DIR/${APP_NAME}.tar.gz

exec_remote "sudo ls ${REMOTE_TMP}/${APP_NAME}.tar.gz"
exec_remote "sudo rm -rf ${NGINX_DIR}/${APP_NAME}"
exec_remote "sudo mkdir ${NGINX_DIR}/${APP_NAME}"
exec_remote "sudo tar -xvzf ${REMOTE_TMP}/${APP_NAME}.tar.gz -C ${NGINX_DIR}/${APP_NAME}"
exec_remote "sudo rm ${REMOTE_TMP}/${APP_NAME}.tar.gz"

echo "copy to shared dir ${NGINX_DIR}/${APP_NAME}"
exec_remote "sudo cp -rf ${NGINX_DIR}/${APP_NAME}/* /opt/shared/$SHARE_FOLDER_NAME/frontend"

exec_remote "cd /opt/resultdata/base; npm run generate "
exec_remote "sudo cp /opt/shared/$SHARE_FOLDER_NAME/frontend/downloads.json ${NGINX_DIR}/${APP_NAME}"