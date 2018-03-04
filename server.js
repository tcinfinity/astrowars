const express = require('express');
const app     = express();
const http    = require('http');
const server  = http.createServer(app);
const path    = require('path');
const io      = require('socket.io')(server);
const uuid    = require('uuid/v4');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

io.on('connection', socket => {
    let clientuuid = uuid();
    io.emit('newpjoin', {uuid: clientuuid})
    console.log('user connected: ' + clientuuid);
});

server.listen(8000, () => {
    console.log("listening on port 8000");
})