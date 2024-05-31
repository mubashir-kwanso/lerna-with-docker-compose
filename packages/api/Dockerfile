# Development
FROM node:20-alpine3.19 AS development

WORKDIR /app

COPY ./package*.json ./
COPY ./packages/api/package.json ./packages/api/package.json

RUN npm install

COPY ./lerna.json ./lerna.json
COPY ./packages/api ./packages/api

EXPOSE 3000

CMD ["npx", "lerna", "run", "start:dev", "--scope", "api"]

# Production
FROM node:20-alpine3.19 AS production

USER node

WORKDIR /app

COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./packages/api/package.json ./packages/api/package.json

RUN npm ci

COPY --chown=node:node ./lerna.json ./lerna.json
COPY --chown=node:node ./packages/api ./packages/api

EXPOSE 3000

RUN npx lerna run build --scope api

CMD ["npx", "lerna", "run", "start:prod", "--scope", "api"]