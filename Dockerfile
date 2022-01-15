FROM node as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY /prod_files/index.html ./
COPY /prod_files/runtime.js ./src/pages/landing/face/
RUN npm run build
COPY /prod_files/raleway_regular.json ./dist/assets/
COPY /prod_files/scene.json ./dist/assets/

FROM nginx as prod
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html