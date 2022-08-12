FROM node:16

WORKDIR /home/harish/TheWorkspace/Aloha/mongo-rest-api/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4004
CMD ["node", "index.js"]

