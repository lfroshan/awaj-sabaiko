# Use an official base image
FROM ubuntu:latest

# Set the working directory
WORKDIR /usr/src/app

# Update and install required packages
RUN apt-get update && \
    apt-get install -y sudo curl

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose port 80
EXPOSE 80

# Install Azure CLI
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# Specify the command to run on container start
CMD [ "node", "./dist/server.js" ]
