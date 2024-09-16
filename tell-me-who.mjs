import { readdir } from 'fs/promises';

// Function to read and print guest names from the directory
async function printGuestNames(directoryPath) {
    try {
        // Read directory contents
        const files = await readdir(directoryPath, { withFileTypes: true });
        let list = [];
        for (let file of files){
            let name = file.name
            let name1 = name.slice(0,-5)
            let names = name1.split('_')
            let name2 = names[1] + ' ' + names[0]
            list.push(name2)
        }

        list.sort((a, b) => {
            const [aLast, aFirst] = a.split(' ');
            const [bLast, bFirst] = b.split(' ');
            return aLast.localeCompare(bLast) || aFirst.localeCompare(bFirst);
        });

        let index = 0;

        for (let invite of list){
            index += 1
            console.log(`${index}. ${invite}`)
        }

    } catch (err) {
        console.error('Error reading directory or files:', err);
    }
}

// Determine directory path from command-line arguments
const args = process.argv;
const directoryPath = args[2] || '.'; // Default to current directory if not provided

// Call the function with the directory path
printGuestNames(directoryPath);
