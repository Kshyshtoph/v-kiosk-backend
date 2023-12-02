from node
COPY ./src /app
WORKDIR /app
RUN npm i
CMD ["node", "index.js"]