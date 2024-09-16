const fs = require('fs');

// Get command line arguments and process them
let args = process.argv.slice(2);
let obj = args[0];
args = obj.split(' ');

let ans = [];
for (let i = 0; i < args.length; i++) {
    let len = args[i].length;
    let half = Math.ceil(len / 2);
    let refined = args[i].substring(half) + args[i].substring(0, half);
    ans.push(refined);
}

let ref = ans.join(' ');

// Write the result to 'verydisco-forever.txt'
fs.writeFile('verydisco-forever.txt', ref, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully to verydisco-forever.txt');
    }
});
