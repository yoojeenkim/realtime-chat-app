const https = require('https');
const express = require('express');

const router = require('./router');

const app = express();
const server = https.createServer(app);

app.use(router);

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));