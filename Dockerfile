FROM node

WORKDIR ~

ARG PORT=3003

ENV NODE_ENV=production

COPY . .

RUN apt-get update && apt-get install -y bash git

RUN yarn install
RUN yarn global add gulp
RUN gulp build

EXPOSE $PORT

CMD ["yarn", "run", "server"]
