var arDrone = require("ar-drone");
var control = arDrone.createUdpControl();
var start = Date.now();

var ref = {};
var pcmd = {};

console.log("Recovering from emergency mode if there was one ...");
ref.emergency = true;
setTimeout(function () {
  console.log("Takeoff ...");

  ref.emergency = false;
  ref.fly = true;
}, 1000);

setTimeout(function () {
  console.log("going straight ...");

//   pcmd.clockwise = 0.5;
  pcmd.front = 0.5;
}, 7000);

setTimeout(function () {
  console.log("Landing ...");

  ref.fly = false;
  pcmd = {};
}, 18000);

setInterval(function () {
  control.ref(ref);
  control.pcmd(pcmd);
  control.flush();
}, 30);
