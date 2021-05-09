FROM node:16.1.0-alpine

WORKDIR /disney-plus-clone

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN yarn run build

CMD ["yarn", "start"]