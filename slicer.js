function slice(arr, start, end) {
    let finish = arr.length;
    if (end !== undefined) {
        finish = end;
    };
    if (start < 0 ) {
        start = arr.length + start;
        finish = arr.length;
    }
    if (end < 0) {
        finish = arr.length + end;
    };
    let result = '';
    for (let i = start; i < finish; i++) {
        result += arr[i]
    };
    return result;
};

console.log(slice('abcdef', -2));
console.log(slice('abcdef', 0, -2));