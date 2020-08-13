console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

const fs = require('fs');

// ReadStream and WriteStream
let myReadStream = fs.createReadStream(`${__dirname}/files/stream/readStream.txt`,"utf8");
let myWriteStream = fs.createWriteStream(`${__dirname}/files/stream/writeStream.txt`,"utf8");

myReadStream.on('data', function(chunk){
    console.log("\n\nChuck Received:\n");
    console.log(chunk);

    myWriteStream.write(chunk);
    console.log("\nWrite Stream Done");
})

// ##OR##

myReadStream.pipe(myReadStream);