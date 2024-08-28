
function indexOf(arr, n, start) {
    let begin = 0;
    if (start != undefined) {
        begin = start;
    };
    const length = arr.length;
    for (let i = begin; i < length; i++) {
        if (arr[i] === n) {
            return i;
        };
    };
    return -1;
};

function lastIndexOf(arr, n, start) {
    let begin = 0;
    // if (start != undefined) {
    //     begin = start;
    // };
    let x = undefined;
    const length = arr.length;
    for (let i = begin; i < length; i++) {
        if (arr[i] === n) {
            x = i;
        };
    };
    if (x === undefined) {
        return -1;
    };
    return x;
};

function includes(arr, n, start) {
    let begin = 0;
    if (start != undefined) {
        begin = start;
    };
    const length = arr.length;
    for (let i = begin; i < length; i++) {
        if (arr[i] === n) {
            return true;
        };
    };
    return false;
};

console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
console.log(lastIndexOf([t, 0, 0, t], t, 2));
const t = 't';
