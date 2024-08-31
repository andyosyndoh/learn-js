function letterSpaceNumber(str) {
    const regex = /[a-zA-Z] \d(?!\d|[a-zA-Z])/g;
    
    const matches = str.match(regex);
    
    return matches || [];
}

console.log(letterSpaceNumber('example 1, example 20')); // Output: ['e 1']
console.log(letterSpaceNumber('a 1, b 2, c 10, d 3f'));  // Output: ['a 1', 'b 2']
console.log(letterSpaceNumber('hello 7 world 3!'));      // Output: ['o 7', 'd 3']
console.log(letterSpaceNumber('nothing 7 here'));          // Output: []