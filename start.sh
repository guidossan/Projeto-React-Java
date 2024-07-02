docker-compose down 

docker build -t back-end:latest ./demo

docker build -t back-end:latest ./imagelite

docker-compose up --build --force-recreate --remove-orphans