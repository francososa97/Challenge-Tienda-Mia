FROM node:alpine

RUN mkdir /orders-api

WORKDIR /orders-api

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]