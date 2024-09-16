import { writeFile } from 'fs/promises';

// Get command line arguments and process them
const args = process.argv.slice(2);
const obj = args[0];
const words = obj.split(' ');

const ans = words.map(word => {
    const len = word.length;
    const half = Math.ceil(len / 2);
    const refined = word.substring(half) + word.substring(0, half);
    return refined;
});

const ref = ans.join(' ');

// Write the result to 'verydisco-forever.txt'
async function writeToFile() {
    try {
        await writeFile('verydisco-forever.txt', ref);
        console.log('File written successfully to verydisco-forever.txt');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

writeToFile();
