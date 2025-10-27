FROM node:20-slim AS build-deps
WORKDIR /usr/src/app
COPY . ./
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN pnpm install
RUN pnpm run dist

# Nginx
FROM nginx:latest
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
