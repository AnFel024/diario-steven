FROM node:22-alpine3.18 as builder
WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 80

CMD ["yarn", "dev", "-p", "80"]