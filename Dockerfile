# Use Docker Compose to build and run the application
FROM docker/compose:1.29.2

COPY . /app
WORKDIR /app

# Build the services and run them
CMD ["sh", "-c", "docker compose build"]
