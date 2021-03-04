FROM node:12.18.1-alpine AS build


# make the 'app' folder the current working directory
WORKDIR /path/to/the/Dockerfile

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

FROM nginx:1.19.0-alpine AS prod-stage

COPY --from=build path/to/the/project/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]