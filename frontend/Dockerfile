FROM node:alpine AS build

WORKDIR /app

COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm install
RUN npm run build


FROM nginx

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/

CMD [ "nginx", "-g", "daemon off;" ]