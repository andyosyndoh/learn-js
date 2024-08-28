Array.prototype.indexOf = undefined
Array.prototype.lastIndexOf = undefined
Array.prototype.includes = undefined

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

function lastIndexOf(arr, n, start = 0) {
    start = arr.length-start-1
    for (let i = start; i >= 0; i--) {
        if (arr[i] === n) {
            return i;
        }
    }
    return -1;
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

// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
// console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
