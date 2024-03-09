FROM postgres:latest

COPY . .

# Create a directory for SQL scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy SQL scripts into the container
COPY ./migrations /docker-entrypoint-initdb.d/

# Set permissions for SQL scripts
# RUN chmod 755 /docker-entrypoint-initdb.d/*.sql
RUN chmod 644 migrations/*.sql

