FROM node:alpine

WORKDIR /app

COPY . .


EXPOSE 9000

CMD node server.js