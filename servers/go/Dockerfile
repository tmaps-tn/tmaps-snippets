# Contexte de build : racine du dépôt (voir docker-compose.yml)
FROM golang:1.25-alpine AS build
WORKDIR /src
COPY servers/go/ .
RUN CGO_ENABLED=0 go build -o /server .

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /server /server
COPY demos /demos
ENV DEMOS_DIR=/demos PORT=8080
EXPOSE 8080
ENTRYPOINT ["/server"]
