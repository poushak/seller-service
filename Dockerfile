FROM node:16-alpine

WORKDIR /opt
COPY . .
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]