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

console.log(ref)