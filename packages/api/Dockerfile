# Production
FROM node:20-alpine3.19 AS production

WORKDIR /app

COPY ./package*.json ./lerna.json ./
COPY ./packages/api/package.json ./packages/api/package.json

RUN npm ci

COPY ./packages/api ./packages/api

EXPOSE 3000

RUN npx lerna run build --scope api

CMD ["npx", "lerna", "run", "start:prod", "--scope", "api"]