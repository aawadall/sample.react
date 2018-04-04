FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install dependencies 
COPY package*.json ./

RUN npm install

# Bundle App Source
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
