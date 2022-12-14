var arDrone = require("ar-drone");
var client = arDrone.createClient();
var fs = require("fs")


client.takeoff();



var itr = 0
client
  .after(5000, function () {
    // this.clockwise(0.5);
    client.on('navdata', console.log);
    var pngStream = client.getPngStream();

    pngStream.on('data', function(data){
      const file = fs.createWriteStream("screenshot"+itr+".png", {
        encoding: "binary",
      });
      itr = itr+1
    file.write(data.toString('binary'), 'binary');
    });
  })
  .after(3000, function () {
    this.stop();
    this.land();
  });
