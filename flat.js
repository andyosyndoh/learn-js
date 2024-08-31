function flat(array, depth = 1) {
    if (depth === 0) {
        return array;
    }
    
    let result = [];
    
    for (let element of array) {
        if (Array.isArray(element)) {
            result = result.concat(flat(element, depth - 1));
        } else {
            result.push(element);
        }
    };
    
    return result;
}