# Use Node.js as base image
FROM node:18-alpine

# Install nginx and supervisor to manage multiple processes
RUN apk add --no-cache nginx supervisor

# Create app directory
WORKDIR /app

# Copy Express app
COPY exprems/ ./exprems/

# Install Node.js dependencies
WORKDIR /app/exprems
RUN npm install

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create supervisor configuration to manage both services
RUN mkdir -p /etc/supervisor/conf.d
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create nginx and supervisor directories f
RUN mkdir -p /var/log/nginx /var/cache/nginx /var/run/nginx \
    && mkdir -p /var/log/supervisor /var/log/node \
    && mkdir -p /run/nginx

# Expose port 80 (nginx)
EXPOSE 80

# Start supervisor (which will start both nginx and node)
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]