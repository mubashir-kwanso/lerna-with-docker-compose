# Development
FROM node:20-alpine3.19 AS development

WORKDIR /app

COPY ./package*.json ./
COPY ./packages/api/package.json ./packages/api/package.json
COPY ./packages/client/package.json ./packages/client/package.json