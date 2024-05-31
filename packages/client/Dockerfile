# Development
FROM node:20-alpine3.19 AS development

WORKDIR /app

COPY ./package*.json ./
COPY ./packages/client/package.json ./packages/client/package.json

RUN npm ci

COPY ./lerna.json ./lerna.json
COPY ./packages/client ./packages/client

EXPOSE 5173

CMD ["npx", "lerna", "run", "start:dev", "--scope", "client"]

# Production
FROM node:20-alpine3.19 AS production

USER node

WORKDIR /app

COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./packages/client/package.json ./packages/client/package.json

RUN npm ci

COPY --chown=node:node ./lerna.json ./lerna.json
COPY --chown=node:node ./packages/client ./packages/client

EXPOSE 4173

RUN npx lerna run build --scope client

CMD ["npx", "lerna", "run", "start", "--scope", "client"]