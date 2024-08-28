function slice(arr, start, end) {
    let finish = arr.length;
    if (end !== undefined) {
        finish = end;
    };
    if (start < 0 && end === undefined) {
        start = arr.length + start;
        finish = arr.length;
    }
    let result = '';
    for (let i = start; i < finish; i++) {
        result += arr[i]
    };
    return result;
};

console.log(slice('abcdef', -2));