const fs = require('fs');
const path = require('path');

const fileUrl = path.resolve('./readStream/', 'article.txt');

const readAbleStream = fs.createReadStream(fileUrl, {
    highWaterMark: 10
});

readAbleStream.on('readable', () => {
    try {
        process.stdout.write(`[${readAbleStream.read()}]`);
    } catch (error) {
        console.log(error);
    }
});

readAbleStream.on('end', () => {
    console.log('Done');
})