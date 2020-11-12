var socketio = require('socket.io')
var io;
module.exports = {

    startSocketServer: function (app) {
        io = require('socket.io')(app);

        io.sockets.on('connection', function (socket) {
            console.log("new connection: " + socket.id);

            socket.on('disconnect', function () {
                console.log("device disconnected");

            });

            socket.on('connect_device', function (data, fn) {
                console.log("data from connected device: " + data);
                for (var col in data) {
                    console.log(col + " => " + data[col]);
                }
            });
            socket.on('chat message', function(message) {
                console.log(message);
            });
        });
    }
};