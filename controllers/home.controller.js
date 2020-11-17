const {
    Board,
    Motor
} = require("johnny-five");

// const board = new Board({
//     port: "COM5"
// });

// exports.startMotor = (req, res, next) => {
//     try {

//         board.on("ready", () => {
//             const motor = new Motor({
//                 pin: 9,

//             });
//             board.repl.inject({
//                 motor
//             });
//             motor.on("start", () => {
//                 console.log(`start: ${Date.now()}`);

//                 board.wait(5000, () => {
//                     motor.stop();
//                 });
//             });

//             motor.on("stop", () => {
//                 console.log(`stop: ${Date.now()}`);
//             });

//             motor.start(255);
//         });
//         res.status(200).send({
//             message: "motor ligado",
//             status: "ok"
//         });

//     } catch (error) {
//         res.status(200).send({
//             message: error,
//             status: "ok"
//         });
//     }

// }