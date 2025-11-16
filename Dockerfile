FROM node:20.11-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]