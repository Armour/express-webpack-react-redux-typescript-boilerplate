FROM node

WORKDIR ~

ENV NODE_ENV=production

COPY . .

RUN apt-get update && apt-get install -y bash git

RUN yarn
RUN yarn global add gulp
RUN bash ./patch.sh

EXPOSE 3003

CMD ["gulp"]
