FROM node:12.16.0

WORKDIR /Library/Webserver/simple-node-server

COPY package.json .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

COPY . .