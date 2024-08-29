function slice(arr, start, end) {
    let finish = arr.length;
    if (end !== undefined) {
        finish = end;
    };
    if (start < 0) {
        start = arr.length + start;
        finish = arr.length;
    }
    if (end < 0) {
        finish = arr.length + end;
    };
    let resultarr = [];

    if (Array.isArray(arr)) {
        for (let i = start; i < finish; i++) resultarr.push(arr[i]);
        return resultarr;
    };

    for (let i = start; i < finish; i++) resultarr.push(arr[i]);
    let ans = resultarr.join("");
    return ans;
};

console.log(slice('abcdef', -2));
console.log(slice([1, 2, 3, 4, 5, 6], 2));