FROM node:alpine

ARG PORT=${PORT}

WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN apk add --no-cache --update make gcc libc-dev libpng-dev automake autoconf libtool nasm
RUN yarn install
RUN yarn build

EXPOSE ${PORT}

CMD ["yarn", "serve"]
