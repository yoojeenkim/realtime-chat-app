const http = require('http');
const express = require('express');
const { Server } = require("socket.io");

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(router);

io.on('connection', (socket) => {
    console.log('a user connected');
})

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));