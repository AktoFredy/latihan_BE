const fs = require('fs');
 const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(data);
};

 const linkFile = path.resolve('./filesystem/', 'notes.txt');
 fs.readFile(linkFile, 'UTF-8', fileReadCallback);

// const data = fs.readFileSync(linkFile, 'UTF-8');
// console.log(data);