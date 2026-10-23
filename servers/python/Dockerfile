# Contexte de build : racine du dépôt (voir docker-compose.yml)
FROM python:3.14-slim
WORKDIR /app
COPY servers/python/ .
COPY demos /demos
ENV DEMOS_DIR=/demos PORT=8080 PYTHONUNBUFFERED=1
EXPOSE 8080
USER nobody
CMD ["python", "server.py"]
