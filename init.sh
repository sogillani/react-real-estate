#!/bin/bash

docker run \
-d \
--name realesate-mongo \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=root \
-e MONGO_INITDB_ROOT_PASSWORD=example \
mongo

docker run \
-d \
--name mongo-express \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=example \
-e ME_CONFIG_BASICAUTH_USERNAME=mexpress \
-e ME_CONFIG_BASICAUTH_PASSWORD=mexpress \
-e ME_CONFIG_MONGODB_URL=mongodb://root:example@localhost:27017 \
mongo-express

