# Use official Node.js image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the frontend
RUN npm run build

# Use Nginx for serving static files
FROM nginx:latest

# Copy built files to Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
