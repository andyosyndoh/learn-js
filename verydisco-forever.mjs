import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';


let args = process.argv.slice(2)
let obj = args[0]
args = obj.split(' ')
let ans = [];
for (let i = 0; i < args.length; i++) {
    let len = args[i].length;
    let half = Math.ceil(len / 2);
    let refined = args[i].substring(half) + args[i].substring(0, half)
    ans.push(refined)
}

let ref = ans.join(' ')


try {
    const controller = new AbortController();
    const { signal } = controller;
    const data = new Uint8Array(Buffer.from(ref));
    const promise = writeFile('verydisco-forever.txt', data, { signal });
    // Abort the request before the promise settles.
    controller.abort();

    await promise;
} catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
}


