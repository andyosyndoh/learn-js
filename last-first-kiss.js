function first(arr) {
    return arr[0];
};

function last(arr) {
    const length = arr.length; 
    return arr[length-1];
};

function kiss(arr) {
    const length = arr.length -1; 
    const ans = [arr[length],arr[0]];
};