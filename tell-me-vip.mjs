import { readdir, readFile } from 'fs/promises';
import { join } from 'path'; // Join directory path and file names
import { writeFile } from 'fs/promises';

// Function to read and print guest names from the directory
async function printGuestNames(directoryPath) {
    try {
        // Read directory contents
        const files = await readdir(directoryPath, { withFileTypes: true });

        if (files.length === 0) {
            console.log(''); // Print an empty string as expected by the test
            return;
        }

        let list = [];
        for (let file of files) {
            if (file.isFile() && file.name.endsWith('.json')) { // Ensure it's a file
                const filePath = join(directoryPath, file.name); // Get full file path
                try {
                    const data = await readFile(filePath, 'utf-8');
                    const jsonObject = JSON.parse(data);

                    // Check if the JSON object's 'answer' field is "yes"
                    if (jsonObject.answer === "yes") {
                        let name = file.name.slice(0, -5); // Remove '.json' from file name
                        let [firstName, lastName] = name.split('_');
                        let formattedName = `${lastName} ${firstName}`; // Format name as "Lastname Firstname"
                        list.push(formattedName);
                    }
                } catch (error) {
                    console.log('')
                    return
                }
            }
        }

        // Sort the names alphabetically
        list.sort((a, b) => {
            const [aLast, aFirst] = a.split(' ');
            const [bLast, bFirst] = b.split(' ');
            return aLast.localeCompare(bLast) || aFirst.localeCompare(bFirst);
        });

        // Print the sorted list with numbering
        let result = '';
        list.forEach((guest, index) => {
            result += `${index + 1}. ${guest}\n`;
        });

        return result

    } catch (err) {
        console.log('');
        return
    }
}

async function writeToFile(listguest) {
    try {
        await writeFile('vip.txt', listguest);
        console.log('File written successfully to vip.txt');
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}


// Determine directory path from command-line arguments
const args = process.argv;
const directoryPath = args[2] || '.'; // Default to current directory if not provided

// Call the function with the directory path
let listguest = printGuestNames(directoryPath);

writeToFile(listguest)
