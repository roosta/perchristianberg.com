FROM node:26-slim AS build
WORKDIR /app

RUN npm install -g pnpm@12.21.0   # match your pnpm-lock.yaml version

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run dist

FROM nginx:1.30-alpine3.24
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
