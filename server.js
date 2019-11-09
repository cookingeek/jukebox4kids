var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var HID = require("node-hid");
var RFID = require('./services/RFID.js');

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
  HID.setDriverType('libusb');
  RFID.init(HID);

});
