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


app.use(express.static('public'));


app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});

// var http = require('http');

// const PORT=9090;


// var server = http.createServer();
// server.on('request', function(request, response) {
//    // console.log(request)
//    // console.log(request.headers)
//    // console.log(request.rawHeaders)
//    // response.end('It Works!! Path Hit: ' + request.url);
//    response.writeHead(200, {"Content-Type": "text/html"});
//    response.write('<!DOCTYPE "html">');
//    response.write('<html>');
//    response.write('<head>');
//    response.write('<title>Hello World Page</title>');
//    response.write('</head>');
//    response.write('<body>');
//    // response.write(JSON.stringify(request.headers));
//    response.write('x-varnish header: ' + request.headers['x-varnish']);
//    response.write('</body>');
//    response.write('</html>');
//    response.end();
// });

// server.listen(PORT, function(){
//     console.log("Server listening on a: http://localhost:%s", PORT);
// });