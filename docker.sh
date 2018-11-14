#!/bin/bash
imageName=essaydb-frontend:1.0.0
containerName=essaydb-frontend

echo building image...
docker build -t $imageName -f Dockerfile  .

echo deleting old container...
docker rm -f $containerName
docker rmi $(docker images -q -f dangling=true)
docker volume rm $(docker volume ls -q -f dangling=true)

echo running new container...
docker run -d -p 4000:5000 --name $containerName $imageName