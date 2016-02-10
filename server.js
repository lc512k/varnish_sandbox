var express = require('express');
var app = express();

app.get('/time', function (req, res) {
  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();
  var ms = today.getMilliseconds();
  res.send('The time on the server is: ' + hh + ':' + mm + ':' + ss + ':' + ms);
});

app.get('/teapot', function (req, res) {
  res.send('Error 418 I\'m a Teapot');
});

app.use(express.static('public'));

app.listen(9090, function () {
  console.log('Backend server listening on port 9090!');
});