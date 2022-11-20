FROM node:16-alpine
WORKDIR /usr/server/app

COPY ./package.json ./
RUN yarn install
COPY ./ .
RUN npm run build
ENV NODE_ENV=production
CMD ["npm", "run" ,"start"]
