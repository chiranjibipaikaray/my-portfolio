# Use lightweight nginx image
FROM nginx:stable-alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your prebuilt Gatsby static site
COPY public /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
