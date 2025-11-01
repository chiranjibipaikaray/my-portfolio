# ---------- BUILDER ----------
FROM node:18-bullseye AS builder

# Install dependencies needed for image libraries
RUN apt-get update && apt-get install -y \
    bash \
    git \
    python3 \
    make \
    g++ \
    autoconf \
    automake \
    libtool \
    nasm \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only package.json files first
COPY package*.json ./

# Clean out Windows node_modules (if somehow present)
RUN rm -rf node_modules

# Install clean Linux-compatible dependencies
RUN npm ci

# Copy rest of the project files
COPY . .

# Rebuild sharp (force native Linux build)
RUN npm rebuild sharp

# Build Gatsby static site
RUN npm run build


# ---------- PRODUCTION ----------
FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
