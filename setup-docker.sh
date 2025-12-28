echo "Running Docker Setup"

if command -v docker >/dev/null 2>&1; then
    echo "Docker is installed"
else
    echo "Docker not found. Installing"
    apt update
    apt install docker.io -y
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi


echo "Pull Latest Images"
docker-compose pull

echo "Starting Containers"
docker-compose up -d

echo "All Done!"