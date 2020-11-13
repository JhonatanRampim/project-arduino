const express = require('express');
const serialport = require('serialport')
const router = express.Router();
const controller = require('../controllers/home.controller');

router.get('/start', controller.startMotor);


module.exports = router