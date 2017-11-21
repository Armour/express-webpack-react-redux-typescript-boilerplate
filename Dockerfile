FROM node

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN apt-get update && apt-get install -y bash git

RUN yarn install
RUN yarn global add gulp
RUN gulp build

EXPOSE 3003

CMD ["yarn", "run", "server"]
