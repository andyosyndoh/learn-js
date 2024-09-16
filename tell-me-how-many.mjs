import { readdir } from 'fs/promises';
import { join } from 'path';

// Function to count files in a directory
async function countFilesInDirectory(directoryPath) {
    try {
        const files = await readdir(directoryPath, { withFileTypes: true });
        const fileCount = files.filter(file => file.isFile()).length;
        console.log(`${fileCount}`);
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

let directoryPath = '.'
let args = process.argv
if (args.length === 2){
    directoryPath = args[1]
}

; // Replace with your directory path
countFilesInDirectory(directoryPath);
