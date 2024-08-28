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
    let resultarr = [];
    let resultstr = "";
    for (let i = start; i < finish; i++) {
        if (Array.isArray(arr)) {
            resultarr += arr[i];
        } else {
            resultstr += arr[i];
        };
    };
    if (Array.isArray(arr)) {
       return resultarr;
    } ;
    return resultstr;
};

console.log(slice('abcdef', -2));
console.log(slice([1, 2, 3, 4, 5, 6], 2));