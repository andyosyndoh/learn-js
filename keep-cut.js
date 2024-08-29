function cutFirst(str) {
    return slice(str, 2);
};

function cutLast(str) {
    const length = str.length - 2;
    return slice(str, 0, length);
};

function cutFirstLast(str) {
    const length = str.length - 2;
    return slice(str, 2, length);
};

function keepFirst(str) {
    if (str.length < 3) return str;
    return slice(str, 0, 2);
};

function keepLast(str) {
    if (str.length < 3) return str;
    const length = str.length - 2;
    return slice(str, length);
};

function keepFirstLast(str) {
    if (str.length < 3) return str;
    return keepFirst(str) + keepLast(str);
};

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

// const testString = "JavaScript";

// console.log("Original String:", testString);
// console.log("cutFirst:", cutFirst(testString));           // "vaScript"
// console.log("cutLast:", cutLast(testString));             // "JavaScri"
// console.log("cutFirstLast:", cutFirstLast(testString));   // "vaScri"
// console.log("keepFirst:", keepFirst(testString));         // "Ja"
// console.log("keepLast:", keepLast(testString));           // "pt"
// console.log("keepFirstLast:", keepFirstLast(testString)); // "Japt"