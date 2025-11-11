FROM node:22

# Install Chromium dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libxshmfence1 \
    libxss1 \
    libxtst6 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install production dependencies saja
RUN npm ci --omit=dev

# Install pakacge cli global
RUN npm install -g @nestjs/cli

# Copy seluruh source code
COPY . .

# Build TypeScript → JS
RUN npm run build

# Expose port app
EXPOSE 8085

# Jalankan hasil build JS
CMD ["node", "dist/main.js"]
