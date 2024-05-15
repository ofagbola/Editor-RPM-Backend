


FROM node:18.17.0

# RUN useradd -ms /bin/sh -u 1001 app
# USER app

WORKDIR /usr/src/app

RUN apt-get update && apt-get upgrade -y && \
apt-get install -y nodejs \
    npm  


COPY package*.json ./

RUN npm install

# COPY --chown=app:app . .
COPY . .


CMD ["npm", "start"]


