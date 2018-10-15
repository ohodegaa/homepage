FROM node

RUN mkdir -p /api

WORKDIR /api

COPY package.json /api
COPY package-lock.json /api

RUN npm install
COPY . /api

EXPOSE 5001

CMD ["npm", "start"]

