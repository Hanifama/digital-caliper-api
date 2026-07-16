FROM node:22

# Timezone
ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install semua dependencies (Baileys butuh beberapa native module)
RUN npm ci

# Install package cli global
RUN npm install -g @nestjs/cli

# Copy seluruh source code
COPY . .

# Build TypeScript → JS
RUN npm run build

# Expose port app
EXPOSE 8085

# Jalankan hasil build JS
CMD ["node", "dist/main.js"]