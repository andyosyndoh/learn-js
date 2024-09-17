import { readFile, writeFile } from 'fs/promises';

async function saveVipGuests(filePath, action, newFileName = '') {
    try {
        const fileContent = await readFile(filePath, 'utf-8');
        let result;
        let outputFileName;

        if (action === 'encode') {
            result = Buffer.from(fileContent, 'utf-8').toString('base64');
            if (newFileName === '') {
                outputFileName = 'cypher.txt';
            } else {
                outputFileName = newFileName;
            }
            await writeFile(outputFileName, result, 'utf-8');
        } else if (action === 'decode') {
            result = Buffer.from(fileContent, 'base64').toString('utf-8');
            if (newFileName === '') {
                outputFileName = 'clear.txt';
            } else {
                outputFileName = newFileName;
            }
            await writeFile(outputFileName, result, 'utf-8');
        } else {
            throw new Error('Invalid action. Use "encode" or "decode".');
        }
        console.log('cyphered');
    } catch (err) {
        console.error('Error reading directory or files:', err);
    }
}

const args = process.argv;
const filePath = args[2];
const action = args[3];
const newFileName = args[4];


saveVipGuests(filePath, action, newFileName);