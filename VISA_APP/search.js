var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var app = express();
var http = require('http').Server(app);
var jsonfile = require('jsonfile');
var JsonDB = require('node-json-db');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
http.listen(3000, function(){
  console.log('server started');
});


app.get('/URL_OF_INTEREST', function(req, res) {
  var obj;
  var jsonobj=[];
  console.log(req.query.MID);
  var Mid = req.query.MID;
  //var db = new JsonDB("myDataBase", true, true);
  fs.readFile('myDataBase.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    var okeys = Object.keys(obj);
    var value1 = okeys[0];
    okeys.forEach (function (e){
      if(e == Mid)
      {
            obj[e].passport.validity.forEach(function(f){
        f.Visa.forEach(function(v){
          jsonobj.push(v);
        })
      })
      }

  });
    res.send(jsonobj);
    res.end();

  })
});


app.post('/save_details', function(req, res){
  var obj;
  //var Mid = "M666666"
  var status = false;
  var received = req.body;
  var req_keys;
  var Mid;
  //var db = new JsonDB("myDataBase", true, true);
  fs.readFile('validation.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    req_keys = Object.keys(received);
    Mid = req_keys[0];
    var okeys = Object.keys(obj);
    okeys.forEach (function (e){
      if(e == Mid)
      {
        status = true;
          res.send(status);
          res.end();
      }

    });

  if(status == false)
  {

    var okey1 = Object.keys(received);
    okey1.forEach (function (e){
      obj[e] = received[e];
    });
    fs.writeFileSync("validation.json", JSON.stringify(obj), "utf8", function (err){        
         if (err) throw err;     
    });
    res.send(status);
    res.end();
  }

  });

});