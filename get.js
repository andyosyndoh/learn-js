// const src = { nested: { key: 'peekaboo' } };
// const path = 'nested.key';
// console.log(get(src, path)); // -> 'peekaboo'

function get(src,path){
    const keys = path.split('.');

    let current = src;

    for (let key of keys) {
        if (current && current.hasOwnProperty(key)) {
            current = current[key]; 
        } else {
            return undefined; 
        }
    }

    return current;
}