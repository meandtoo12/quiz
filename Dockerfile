# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Expose the port on which your app will run
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]