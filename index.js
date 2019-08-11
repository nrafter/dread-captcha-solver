const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const gm = require('gm');
const MongoClient = require('mongodb').MongoClient;
const myurl = 'mongodb://localhost:27017';
var app = express();

app.use(bodyParser.json());

MongoClient.connect(myurl, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test')
  app.listen(4000, () => {
    console.log('listening on 4000')
  })
})

var upload = multer({ storage : storage }).array('userPhoto',2);

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        console.log(req.body);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});

gm("secureCaptcha8.png")
  .blur(10)
  .blackThreshold("10%")
  .blackThreshold("10%")
  .blackThreshold('80%')
  .blur(.5)
  .blackThreshold('50%')
  .write('out.jpg', ia => console.log(ia) );
