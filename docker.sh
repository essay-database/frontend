#!/bin/bash
imageName=essaydb-frontend:latest
containerName=essaydb-frontend-latest

echo building image...
docker build -t $imageName -f Dockerfile  .

echo deleting old container...
docker rm -f $containerName
docker rmi $(docker images -q -f dangling=true)
docker volume rm $(docker volume ls -q -f dangling=true)

echo running new container...
docker run -e REACT_APP_FETCH_URL=http://localhost:8080/essays -d -p 4000:5000 --name $containerName $imageName