FROM node:alpine

WORKDIR /app/scheduler

COPY package*.json yarn.lock ./

RUN yarn install

RUN yarn run db:migrate

RUN yarn run db:push

RUN yarn run proto:gen

COPY . .

EXPOSE 3003

CMD ["npm", "start:server"]