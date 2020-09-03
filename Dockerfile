FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app

ENV PORT 8000
EXPOSE 8000

CMD ["npm", "start"]