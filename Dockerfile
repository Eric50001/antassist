FROM ant:1.0.1
WORKDIR /pages/inquire/inquire
COPY package*.json ./
RUN npm install --only=production
COPY . ./
CMD [ "node", "app.js" ]