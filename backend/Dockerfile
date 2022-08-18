FROM node:18-alpine3.15

WORKDIR /usr/src/app/backend

COPY ./package.json /usr/src/app/backend/
COPY ./.env /usr/src/app/backend/

RUN npm install

COPY . .

ENV NODE_ENV .env

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]