console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

const fs = require('fs');

// Synchronous Process (Blocking the Code till it finished!)..
function Synchronous(filetoRead, filetoWrite) {
    console.log("\n\nSynchronous Process ..\n");

    // check if filetoWrite exist, to delete it..

    if (fs.existsSync(`${__dirname}/files/write(Sync)/${filetoWrite}`)) {
        fs.unlinkSync(`${__dirname}/files/write(Sync)/${filetoWrite}`);
    } else {
        if (!fs.existsSync(`${__dirname}/files/write(Sync)`)) fs.mkdirSync(`${__dirname}/files/write(Sync)`);
        console.log(`We will create your file in ${__dirname}/files/write(Sync)/${filetoWrite}`);
    }

    // check if filetoRead exist, to delete it..
    if (fs.existsSync(`${__dirname}/files/read(Sync)/${filetoRead}`)) {
        // read file Sync
        let txt = fs.readFileSync(`${__dirname}/files/read(Sync)/${filetoRead}`, "utf8");

        fs.writeFileSync(`${__dirname}/files/write(Sync)/${filetoWrite}`, txt);
        console.log(`We Read this Text: \n${txt}\n#From: ReadMe(Sync).txt`);
    } else {
        if (!fs.existsSync(`${__dirname}/files/read(Sync)`)) fs.mkdirSync(`${__dirname}/files/read(Sync)`);
        console.error(`This ${filetoRead} dosen't exist in ${__dirname}/files/read(Sync)/`);
        return;
    }
}


// Asynchronous Process ( Non-Blocking for the Code (run with code))..
function Asynchronous(filetoRead, filetoWrite) {
    console.log("\n\nAsynchronous Process ..\n");
    fs.access(`${__dirname}/files/write(Async)`, fs.F_OK, (err) => {
        if (err) {
            fs.mkdir(`${__dirname}/files/write(Async)`, function (err) {
                if (err) console.error(err);
                console.log(`We will create your file in ${__dirname}/files/write(Sync)/${filetoWrite}`);
            });
            return;
        }
        fs.access(`${__dirname}/files/write(Async)/${filetoWrite}`, fs.F_OK, (err) => {
            if (err) {
                console.log(`We will create your file in ${__dirname}/files/write(Sync)/${filetoWrite}`);
                return;
            }
            fs.unlink(`${__dirname}/files/write(Async)/${filetoWrite}`, function (err) {
                if (err) console.error(err);
            });

        })
    });

    fs.access(`${__dirname}/files/read(Async)`, fs.F_OK, (err) => {
        if (err) {
            fs.mkdir(`${__dirname}/files/read(Async)`, function (err) {
                if (err) console.error(err);
                console.error(`This ${filetoRead} dosen't exist in ${__dirname}/files/read(Async)/`);
            });
            return;
        }
        fs.access(`${__dirname}/files/read(Async)/${filetoRead}`, fs.F_OK, (err) => {
            if (err) {
                console.error(`This ${filetoRead} dosen't exist in ${__dirname}/files/read(Async)/`);
                return;
            }
            fs.readFile(`${__dirname}/files/read(Async)/${filetoRead}`, "utf8", function (err, data) {
                console.log(`We Read this Text: \n${data}\n#From: ReadMe(Async).txt`);
                fs.writeFile(`${__dirname}/files/write(Async)/${filetoWrite}`, data, function (err) {
                    if (err) console.log(err);
                });
            });
        });
    });
}

Synchronous('readMe(Sync).txt', 'writeawa(Sync).txt');
Asynchronous('readMe(Async).txt', 'writeawe(Async).txt');