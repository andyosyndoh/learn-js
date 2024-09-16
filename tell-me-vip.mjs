import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

// Function to filter guests who answered "YES" and save to vip.txt
async function saveVipGuests(directoryPath) {
    try {
        // Read directory contents
        const files = await readdir(directoryPath, { withFileTypes: true });
        let guestList = [];

        // Loop through each file
        for (let file of files) {
            if (file.isFile() && file.name.endsWith('.json')) {
                const filePath = join(directoryPath, file.name);
                try {
                    // Read the JSON file
                    const data = await readFile(filePath, 'utf-8');
                    const jsonObject = JSON.parse(data);

                    // Check if the 'answer' is "yes"
                    if (jsonObject.answer === "yes") {
                        // Get the guest name from the file name
                        const name = file.name.slice(0, -5); // Remove the ".json"
                        const [firstName, lastName] = name.split('_');
                        const formattedName = `${lastName} ${firstName}`; // Format as "Lastname Firstname"
                        guestList.push(formattedName);
                    }
                } catch (error) {
                    console.error(`Error reading or parsing file ${file.name}:`, error);
                }
            }
        }

        // Sort the guest list alphabetically by last name, then first name
        guestList.sort((a, b) => {
            const [aLast, aFirst] = a.split(' ');
            const [bLast, bFirst] = b.split(' ');
            return aLast.localeCompare(bLast) || aFirst.localeCompare(bFirst);
        });

        // Prepare the final output format: "Number. Lastname Firstname"
        let vipOutput = guestList.map((guest, index) => `${index + 1}. ${guest}`).join('\n');

        // Save the formatted list to vip.txt
        await writeFile('vip.txt', vipOutput, 'utf-8');
        console.log('VIP guest list saved to vip.txt');

    } catch (err) {
        console.error('Error reading directory or files:', err);
    }
}

// Get directory path from command-line arguments
const args = process.argv;
const directoryPath = args[2] || '.'; // Default to current directory if not provided

// Call the function with the directory path
saveVipGuests(directoryPath);
