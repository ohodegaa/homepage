FROM node:10.11.0

RUN mkdir -p /webapp

WORKDIR /webapp

COPY package.json /webapp
COPY package-lock.json /webapp

RUN npm install
COPY . /webapp


EXPOSE 9002

CMD ["npm", "start"]

