const express = require('express');
const app = express()
const http = require('http');
const cors = require('cors');   // 4.4k (gzipped: 1.9k)

app.use(cors());

const server = http.createServer(app);


server.listen(3001, () => {
    console.log("SERVER RUNNING");
});
