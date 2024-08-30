function split(str, s) {
    let res = [];
    let st = 0;
    for (let i = 0; i < str.length; i++) {
        if (slice(str ,i, i+s.length) === s) {
            res.push(slice(str, st, i));
            st = i + s.length;
        } else if (i === str.length -1) {
            res.push(slice(str, st, str.length));
        };
    };
    return res
};

function join(str, s) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            res += str + s;
        } else {
            res += str
        };
    };
    return res
}

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
    let resultarr = '';

    for (let i = start; i < finish; i++) resultarr += (arr[i]);
    return resultarr;
}

console.log(split('a b c', ' '));