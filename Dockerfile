FROM node:18

# RUN npm install -g ts-node

WORKDIR /myapp
COPY package*.json .
COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm","run","dev"]
