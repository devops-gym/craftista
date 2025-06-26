FROM node:22.16-slim
WORKDIR /app
COPY . .
RUN npm ci 
EXPOSE 3000
CMD ["node", "./app.js"]

