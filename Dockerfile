# Fetching the latest node image on alpine linux
FROM node:18-alpine

# Declaring env
# ENV PORT 8090

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm install

# Copying all the files in our project
COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000
# Starting our application
CMD serve -s build


