function indexOf(arr, n,start) {
    let begin = 0;
    if (start != undefined) {
        begin = start;
    };
    const length = arr.length()
    for (i = begin;i < length;i++){
        if (arr[i] === n){
            return i;
        };
    };
    return -1;
};

function lastIndexOf(arr, n,start) {
    let begin = 0;
    if (start != undefined) {
        begin = start;
    };
    let x = undefined;
    const length = arr.length()
    for (i = begin;i < length;i++){
        if (arr[i] === n){
            x = i;
        };
    };
    if (x === undefined) {
        return -1;
    };
    return x;
};

function includes(arr, n,start) {
    let begin = 0;
    if (start != undefined) {
        begin = start;
    };
    const length = arr.length()
    for (i = begin;i < length;i++){
        if (arr[i] === n){
            return true;
        };
    };
    return false;
};

