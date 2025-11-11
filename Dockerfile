FROM node:22-alpine

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install production dependencies saja
RUN npm ci --omit=dev

# Copy seluruh source code
COPY . .

# Build TypeScript → JS
RUN npm run build

# Expose port app
EXPOSE 8085

# Jalankan hasil build JS
CMD ["node", "dist/main.js"]
