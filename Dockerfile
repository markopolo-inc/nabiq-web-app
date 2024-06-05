# Stage 1: Build the application
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container
COPY . .

# Set the build environment to production by default
ARG NODE_ENV=production

# Build the application
# RUN if [ "$NODE_ENV" = "development" ] ; then yarn build:dev ; else yarn build ; fi
RUN npm run build

# Stage 2: Run the application
FROM nginx:alpine

# Copy the build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Custom Nginx configuration to handle client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]