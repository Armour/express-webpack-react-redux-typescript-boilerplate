FROM node

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN yarn install
RUN yarn global add gulp
RUN gulp build

EXPOSE 3003

CMD ["yarn", "run", "server"]
