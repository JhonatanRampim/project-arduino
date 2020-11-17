const express = require('express');
const serialport = require('serialport')
const router = express.Router();
const controller = require('../controllers/home.controller');

// router.get('/start', controller.startMotor);

const io = require('socket.io');


let SerialPort = serialport.SerialPort;

const Readline = serialport.parsers.Readline;

let port = new serialport("COM4", {
    baudRate: 9600,
    parser: new Readline("\n")
});

port.on('open', onOpen);
port.on('data', onData);

function onData(data) {
    console.log(data.toString('utf8'));
    // io.emit("data", data);
};

function onOpen() {
    console.log("serial port open");
}

router.get('/on', (req, res, next) => {
    port.write('on')
    return res.json({
        teste: "teste"
    })
});

router.get('/off', (req, res, next) => {
    port.write('off')
    return res.json({
        teste: "teste"
    })
});

router.get('/revert', (req, res, next) => {
    port.write('revert')
    return res.json({
        teste: "teste"
    })
});

module.exports = router