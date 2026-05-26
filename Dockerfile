
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./


# ---------- Development ----------
FROM base AS development
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]

# ---------- Build ----------
FROM base AS build
RUN npm  ci
COPY . .
RUN npm run build


# ---------- Production ----------

FROM nginx:alpine AS production
WORKDIR /app
# Créer les dossiers nécessaires
RUN mkdir -p /var/cache/nginx \
    && mkdir -p /var/run \
    && chown -R nginx:nginx /var/cache/nginx /var/run
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
USER nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
 CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/health || exit 1
ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]

