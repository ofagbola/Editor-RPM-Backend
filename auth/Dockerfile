# Build stage
FROM node:18.17.0
WORKDIR /usr/src/app

RUN apt-get update && apt-get upgrade -y && \
apt-get install -y nodejs \
    npm  


COPY package*.json ./

RUN npm install

# COPY --chown=app:app . .
COPY . .


CMD ["npm", "start"]


