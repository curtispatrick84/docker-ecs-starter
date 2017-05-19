FROM node:7.4.0-slim
ARG DEBIAN_FRONTEND=noninteractive

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Copy app files and install deps
COPY . /usr/src/app
RUN npm install

# Build - (but we have nothing to build yet)
# RUN npm build

EXPOSE 8800
CMD [ "node", "app.js" ]
