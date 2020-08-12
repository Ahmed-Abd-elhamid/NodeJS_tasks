console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

let fs = require('fs');

// Synchronous Process (Blocking the Code till it finished!)..
function Synchronous(filetoRead, filetoWrite) {
    console.log("\n\nSynchronous Process ..\n");

    // check if filetoWrite exist, to delete it..

    if (fs.existsSync(`files/write(Sync)/${filetoWrite}`)) {
        fs.unlinkSync(`files/write(Sync)/${filetoWrite}`);
    } else {
        if (!fs.existsSync('files/write(Sync)')) fs.mkdirSync('files/write(Sync)');
        console.log(`We will create your file in ${__dirname}/files/write(Sync)/${filetoWrite}`);
    }

    // check if filetoRead exist, to delete it..
    if (fs.existsSync(`files/read(Sync)/${filetoRead}`)) {
        // read file Sync
        let txt = fs.readFileSync(`files/read(Sync)/${filetoRead}`, "utf8");

        fs.writeFileSync(`files/write(Sync)/${filetoWrite}`, txt);
        console.log(`We Read this Text: \n${txt}\n#From: ReadMe(Sync).txt`);
    } else {
        if (!fs.existsSync('files/read(Sync)')) fs.mkdirSync('files/read(Sync)');
        console.error(`This ${filetoRead} dosen't exist in ${__dirname}/files/read(Sync)/`);
        return;
    }
}


// Asynchronous Process ( Non-Blocking for the Code (run with code))..
function Asynchronous(filetoRead, filetoWrite) {
    console.log("\n\nAsynchronous Process ..\n");
    fs.access('files/write(Async)', fs.F_OK, (err) => {
        if (err) {
            fs.mkdir('files/write(Async)', function (err) {
                if (err) console.error(err);
                console.log(`We will create your file in ${__dirname}/files/write(Sync)/${filetoWrite}`);
            });
            return;
        }
        fs.access(`files/write(Async)/${filetoWrite}`, fs.F_OK, (err) => {
            if (err) {
                console.log(`We will create your file in ${__dirname}/files/write(Sync)/${filetoWrite}`);
                return;
            }
            fs.unlink(`files/write(Async)/${filetoWrite}`, function (err) {
                if (err) console.error(err);
            });

        })
    });

    fs.access('files/read(Async)', fs.F_OK, (err) => {
        if (err) {
            fs.mkdir('files/read(Async)', function (err) {
                if (err) console.error(err);
                console.error(`This ${filetoRead} dosen't exist in ${__dirname}/files/read(Async)/`);
            });
            return;
        }
        fs.access(`files/read(Async)/${filetoRead}`, fs.F_OK, (err) => {
            if (err) {
                console.error(`This ${filetoRead} dosen't exist in ${__dirname}/files/read(Async)/`);
                return;
            }
            fs.readFile(`files/read(Async)/${filetoRead}`, "utf8", function (err, data) {
                console.log(`We Read this Text: \n${data}\n#From: ReadMe(Async).txt`);
                fs.writeFile(`files/write(Async)/${filetoWrite}`, data, function (err) {
                    if (err) console.log(err);
                });
            });
        });
    });
}

Synchronous('readMe(Sync).txt', 'writeawa(Sync).txt');
Asynchronous('readMe(Async).txt', 'writeawe(Async).txt');