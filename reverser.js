function reverse(arr) {
    let resultarr = [];
    let finish = arr.length -1;
    if (Array.isArray(arr)) {
        for (let i = finish ; i >= 0; i--) resultarr.push(arr[i]);
        return resultarr;
    };

    for (let i = finish ; i >= 0; i--) resultarr.push(arr[i]);
    let ans = resultarr.join("");
    return ans;
};