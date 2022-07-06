FROM node:17.9-stretch

RUN mkdir -p user/src/vicky

WORKDIR user/src/vicky

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]