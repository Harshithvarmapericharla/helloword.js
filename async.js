const fs = require('fs').promises;

const readFileAsync = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf-8' });
        console.log('Got data');
        console.log(data);
    } catch (err) {
        console.error('Error');
        console.error(err);
    }
};
readFileAsync('./test.txt');

    