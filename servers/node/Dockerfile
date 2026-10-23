# Contexte de build : racine du dépôt (voir docker-compose.yml)
FROM node:24-alpine
WORKDIR /app
COPY servers/node/ .
COPY demos /demos
ENV DEMOS_DIR=/demos PORT=8080
EXPOSE 8080
USER node
CMD ["node", "server.js"]
