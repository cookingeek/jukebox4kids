var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var RFID = require('./services/RFID.js');
var HID = require('node-hid');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");


  var devices = HID.devices()
  devices.forEach(function(item) {
    console.log("p: " + item.productId + " v: "+ item.vendorId);

    var rfid = new RFID(item.productId, item.vendorId).listen();
});
    rfid.on('scan', function(data) {
        console.log('scan', data);
    });

    rfid.on('input', function(data) {
        console.log('input', data);
    });
});
