# FROM postgres:latest

# COPY . .

# # Create a directory for SQL scripts
# RUN mkdir -p /docker-entrypoint-initdb.d

# # Copy SQL scripts into the container
# COPY ./migrations /docker-entrypoint-initdb.d/

# # Set permissions for SQL scripts
# # RUN chmod 755 /docker-entrypoint-initdb.d/*.sql
# RUN chmod 644 ./migrations/*.sql


FROM node:18.17.0



WORKDIR /usr/src/app

RUN apt-get update && apt-get upgrade -y && \
apt-get install -y nodejs \
    npm  


COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 4000


CMD ["npm", "start"]


