FROM strapi/base:alpine

WORKDIR /usr/src/app/backend

COPY ./package.json /usr/src/app/backend/
COPY ./.env /usr/src/app/backend

RUN npm install

COPY . .

ENV NODE_ENV .env

EXPOSE 1337

CMD ["npm", "run", "develop"]