FROM node:12.14.1 as build-stage

RUN npm cache clean --force

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "build" ]



#production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /usr/app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]