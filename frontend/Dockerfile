FROM node:18-alpine3.15

WORKDIR /usr/src/app/frontend

COPY ./package.json /usr/src/app/frontend/

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]