// const src = { nested: { key: 'peekaboo' } };
// const path = 'nested.key';
// console.log(get({ a: [{ b: t }] }, 'a.0.b.toString')); 

function get(src,path){
    const keys = path.split('.');

    let current = src;

    // if (keys[1] != 

    for (let key of keys) {
        if (current && current.hasOwnProperty(key)) {
            current = current[key]; 
        } else {
            // return keys[keys.length-1];
            return undefined;
        }
    }

    return current;
}