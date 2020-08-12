console.log(`Path to file: { Dir: ${__dirname}, file:${__filename}}`);

console.log("Timers app for 20 seconds\n");
console.log("setTimeout Timer start after 1 sec. (please wait)..");

setTimeout(() => {
    let t = 2;
    console.log("setinterval Timer start after 1 sec. (please wait again)..");
    let interval = setInterval(() => {
        console.log(t + " second passed..");
        t++;
        if (t > 20) clearInterval(interval);
    }, 1000);
}, 1000);