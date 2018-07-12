FROM node:alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool nasm
RUN yarn install
RUN yarn build

EXPOSE 3003

CMD ["yarn", "serve"]
