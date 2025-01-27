# Use the official MariaDB image
FROM mariadb:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=portfolio
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=test123

# Copy the exported SQL file into the Docker image
COPY dump-portfolio-202501261929.sql /docker-entrypoint-initdb.d/

# Expose MariaDB port
EXPOSE 3306