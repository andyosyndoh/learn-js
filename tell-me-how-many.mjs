import { readdir } from 'fs/promises';
import { join } from 'path';

async function countFilesInDirectory(directoryPath) {
    try {
        const files = await readdir(directoryPath, { withFileTypes: true });
        const fileCount = files.filter(file => file.isFile()).length;
        console.log(`Number of files in directory '${directoryPath}': ${fileCount}`);
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}


let directoryPath = '.';

const args = process.argv;
if (args.length === 3) {
    directoryPath = args[2];
}
countFilesInDirectory(directoryPath);

