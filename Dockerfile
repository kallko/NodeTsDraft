FROM node:12-slim
RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /app
COPY [ "package.json", "package-lock.json", "./"]
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install -g ts-node
USER node
RUN npm install
COPY --chown=node:node . .

