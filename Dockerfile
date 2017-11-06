FROM node

WORKDIR ~

ENV NODE_ENV=production

COPY . .

RUN apt-get update && apt-get install -y bash git

RUN yarn install
RUN yarn global add gulp
RUN gulp build

EXPOSE 3003

CMD ["yarn", "run", "server"]
