import { readFile } from 'fs/promises';

// Get command line arguments and process them
const args = process.argv.slice(2);
const obj = args[0];
try {
    const filePath = new URL(obj, import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const words = contents.split(' ');
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        let len = words[i].length;
        let half = Math.floor(len / 2);
        let refined = words[i].substring(half) + words[i].substring(0, half)
        ans.push(refined)
    }
    const ref = ans.join(' ');
    console.log(ref)
} catch (err) {
    console.error(err.message);
}
