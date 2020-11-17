const express = require('express');
const app = express();
const sockets = require('./sockets/sockets');
const motorRoute = require('./routes/home.route')
var socketio = require('socket.io')


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use('/motor', motorRoute)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
module.exports = app;