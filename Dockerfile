# Use the official Node.js 14 image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

RUN npm ci --only=production && npm cache clean --force
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

COPY .env .env

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]

# docker run -p 3000:3000 
# docker-compose up
