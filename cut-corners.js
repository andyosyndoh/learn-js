function round(num) {
    // let res = [];
    // for (let i = 0; i < num.length; i++) {
        let first = Math.floor(num);
        if ((num - first) >= 0.5) {
            let ans = first + 1;
            res.push(ans);
        } else {
            res.push(first);
        };

    // };
    // return res;
};

function ceil(num) {
    // let res = [];
    // for (let i = 0; i < num.length; i++) {
        let first = Math.ceil(num[i]);
        res.push(first);
    // };
    return res;
};

function floor(num) {
    // let res = [];
    // for (let i = 0; i < num.length; i++) {
        let first = Math.floor(num[i]);
        res.push(first);
    // };
    return res;
};

function trunc(num) {
    // let res = [];
    // for (let i = 0; i < num.length; i++) {
        let first = Math.trunc(num[i]);
        res.push(first);
    // };
    return res;
};


// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log((round(nums)))
// console.log((floor(nums)))
// console.log((trunc(nums)))
// console.log((ceil(nums)))
