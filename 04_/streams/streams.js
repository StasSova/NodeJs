import fs from "node:fs"
import path from "node:path";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const rStream = fs.createReadStream(path.resolve(__dirname, 'big.txt'), {
    encoding: 'utf8',
    highWaterMark: 1,
});

function readNextChar() {
    const chunk = rStream.read(1);

    if (chunk !== null) {
        console.log(chunk);

        setTimeout(readNextChar, 100);
    } else {
        rStream.once('readable', readNextChar);
    }
}

rStream.on('readable', readNextChar);

rStream.on('end', () => {
    console.log('Read end.');
});

rStream.on('error', (err) => {
    console.error('Read error:', err);
});