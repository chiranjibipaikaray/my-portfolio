# Simple production image for prebuilt Gatsby static site
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your prebuilt Gatsby static site
COPY public /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
