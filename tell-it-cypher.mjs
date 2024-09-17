import {  readFile, writeFile } from 'fs/promises';

async function saveVipGuests(file, action, newFileName = null) {
    try {
        if (file.isFile()) {
            const fileContent = await readFile(file, 'utf-8');
            let result;
            let outputFileName;

            if (action === 'encode') {
                result = Buffer.from(fileContent).toString('base64');
                outputFileName = newFileName || 'cypher.txt';
            } else if (action === 'decode') {
                result = Buffer.from(fileContent, 'base64').toString('utf-8');
                outputFileName = newFileName || 'clear.txt';
            } else {
                throw new Error('Invalid action. Use "encode" or "decode".');
            }
        }

        await writeFile(outputFileName, result, 'utf-8');
        console.log('cyphered');

    } catch (err) {
        console.error('Error reading directory or files:', err);
    }
}

const args = process.argv;
const filePath = args[2];
const action = args[3];
const newFileName = args[4];


saveVipGuests(filePath,action,newFileName);