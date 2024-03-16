const fs = require('fs');
const path = require('path');

const fileUrl = path.resolve('./stream/', 'input.txt');
const outUrl = path.resolve('./stream/', 'output.txt');

const writeAbleStream = fs.createWriteStream(outUrl);

const readAbleStream = fs.createReadStream(fileUrl, {
    highWaterMark: 15
});

readAbleStream.on('readable', () => {
    try {
        writeAbleStream.write(`${readAbleStream.read()}\n`)
    } catch (error) {
        console.log(error);
    }
});

readAbleStream.on('end', () => {
    writeAbleStream.end();
});