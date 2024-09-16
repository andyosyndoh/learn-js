import { readFile } from 'fs/promises';

// Get command line arguments and process them
const args = process.argv.slice(2);
const obj = args[0];
try {
    const filePath = new URL(obj, import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const words = contents.split(' ');

    const ans = words.map(word => {
        const len = word.length;
        const half = Math.ceil(len / 2);
        const refined = word.substring(half) + word.substring(0, half);
        return refined;
    });

    const ref = ans.join(' ');
    console.log(ref)
} catch (err) {
    console.error(err.message);
}
