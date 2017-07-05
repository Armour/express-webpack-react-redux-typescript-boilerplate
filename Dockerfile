FROM node

WORKDIR ~

COPY . .

RUN apt-get update && apt-get install -y bash git

RUN yarn install
RUN yarn global add gulp
RUN bash ./patch.sh

EXPOSE 3003

CMD ["gulp"]
