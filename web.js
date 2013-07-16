var fs = require('fs');
var buffer = new Buffer(50);
var express = require('express');

buffer = fs.readFileSync('index.html');
var s = buffer.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(s);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
