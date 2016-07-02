var http = require('http');
var fs = require('fs');
var path = require('path');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	// var file = path.join(__dirname, '/html', 'index.html');
	// fs.readFile(file, null, function(error, data) {
	fs.readFile('./index.html', null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File not found!');
		} else {
			response.write(data);
		}
		response.end();
	});

} 

http.createServer(onRequest).listen(8000);