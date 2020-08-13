console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
    if (request.url == '/') {
        console.log(`Request URL: ${request.url}`);
        response.writeHead(200, { "Content-Type": "text/html" });
        let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(response);
    } else {
        console.log(`Request URL: ${request.url}`);
        response.writeHead(200, { "Content-Type": "text/plain" });
        let myReadStream = fs.createReadStream(__dirname + '/FileSystem/files/stream/readStream.txt', 'utf8');
        myReadStream.pipe(response);
    }
    // response.end('Index')
});

console.log("Listening to localhost:2000");
server.listen(2000, 'localhost');

// http Port : 80
// https Port : 443