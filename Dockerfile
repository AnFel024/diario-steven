FROM node:22-alpine3.18 as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install 
COPY . .
RUN yarn build

