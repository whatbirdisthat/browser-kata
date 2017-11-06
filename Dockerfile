FROM node:alpine
RUN npm install -g browser-sync

EXPOSE 3000 3001 8080
