FROM node:11
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g serve
COPY package*.json ./
RUN npm install --only=prod
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]