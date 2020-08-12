console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

let http = require('http');
// let html = require('./index.html');

let server = http.createServer( (request, response) => {
    console.log(`Request URL: ${request.url}`);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end('Index')
});

console.log("Listening to localhost:2000");
server.listen(2000, 'localhost');

// http Port : 80
// https Port : 443