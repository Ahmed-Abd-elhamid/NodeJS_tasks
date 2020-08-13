console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
    if (request.url == '/html') {
        console.log(`Request URL: ${request.url}`);
        response.writeHead(200, { "Content-Type": "text/html" });
        let myReadStream = fs.createReadStream(__dirname + '/templates/index.html', 'utf8');
        myReadStream.pipe(response);

    } else if (request.url == '/json') {
        console.log(`Request URL: ${request.url}`);
        response.writeHead(200, { "Content-Type": "application/json" });
        let myObj = {
            name: "ahmed",
            age: 20,
            gender: "male",
        }
        response.end(JSON.stringify(myObj));

    } else if (request.url == '/plain') {
        console.log(`Request URL: ${request.url}`);
        response.writeHead(200, { "Content-Type": "text/plain" });
        let myReadStream = fs.createReadStream(__dirname + '/FileSystem/files/stream/readStream.txt', 'utf8');
        myReadStream.pipe(response);

    } else {
        console.log(`Request URL: ${request.url}`);
        response.writeHead(404, { "Content-Type": "text/html" });
        let myReadStream = fs.createReadStream(__dirname + '/templates/links.html', 'utf8');
        myReadStream.pipe(response);
    }
});

console.log("Listening to localhost:2000");
server.listen(2000, 'localhost');

// http Port : 80
// https Port : 443