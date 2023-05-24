FROM node:20-alpine3.16 as builder
WORKDIR /app
COPY package*.json .
COPY babel.config.json .
COPY webpack.config.js .
RUN npm install --silent
COPY ./src ./src
RUN npm run build

FROM nginx:1.23.4-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]