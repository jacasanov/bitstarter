var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var read1 = fs.readFileSync('./index.html');

app.get('/', function(request, response) {
  response.send(read1.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
