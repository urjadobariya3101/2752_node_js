var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
app.listen(8080);

// http.createServer(function (req, res) {
//   fs.readFile('test.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);