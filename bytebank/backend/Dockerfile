FROM node:22
WORKDIR /bytebank/backend
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT node server.js