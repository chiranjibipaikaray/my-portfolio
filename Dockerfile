# Simple production image for prebuilt static Gatsby site

FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your prebuilt Gatsby static site
COPY public /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
