# Use the official Node.js image
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port (change this to your application's port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
