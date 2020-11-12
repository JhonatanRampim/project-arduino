const app = require('express');
const sockets = require('./sockets/sockets');

const http = require('http').createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(content));
    res.end(content);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

sockets.startSocketServer(http);
http.listen(3000, () => {
    console.log('listening on *:3000');
});