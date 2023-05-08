#! /bin/bash

echo 'Removing tagged images'
docker rmi gcr.io/poushak/seller:1.0.0

echo 'Removing existing images'
docker rmi seller:1.0.0

echo 'Creating new image for poushak-seller'
docker build --tag seller:1.0.0 .