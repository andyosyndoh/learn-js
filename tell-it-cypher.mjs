async function processFile(filePath, action, newFileName = null) {
    try {
        // Read the content of the file
        const fileContent = await readFile(filePath, 'utf-8');
        let result;
        let outputFileName;

        // Handle encode or decode action
        if (action === 'encode') {
            result = Buffer.from(fileContent).toString('base64');
            outputFileName = newFileName || 'cypher.txt';
        } else if (action === 'decode') {
            result = Buffer.from(fileContent, 'base64').toString('utf-8');
            outputFileName = newFileName || 'clear.txt';
        } else {
            throw new Error('Invalid action. Use "encode" or "decode".');
        }

        // Write the result to the specified file
        await writeFile(outputFileName, result, 'utf-8');
        console.log(`File successfully processed and saved as ${outputFileName}`);
    } catch (err) {
        console.error('Error processing file:', err);
    }
}


// Get command-line arguments
const args = process.argv;
const filePath = args[2];
const action = args[3];
const newFileName = args[4];

// Validate that a file path and action are provided
if (!filePath || !action) {
    console.error('Usage: node tell-it-cypher.mjs <file-path> <encode/decode> [new-file-name]');
    process.exit(1);
}

// Process the file
processFile(filePath, action, newFileName);