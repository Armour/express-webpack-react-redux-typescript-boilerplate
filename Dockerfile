FROM node

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN yarn install
RUN yarn build

EXPOSE 3003

CMD ["yarn", "server"]
