FROM node:11
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g serve
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]