# Production
FROM node:20-alpine3.19 AS production

WORKDIR /app

COPY ./package*.json ./lerna.json ./
COPY ./packages/client/package.json ./packages/client/package.json

RUN npm ci

COPY ./packages/client ./packages/client

EXPOSE 4173

ENV \
VITE_PROJECT_NAME="React.js Vite App" \
VITE_API_URL="http://localhost:3000"

RUN npx lerna run build --scope client

CMD ["npx", "lerna", "run", "start", "--scope", "client"]