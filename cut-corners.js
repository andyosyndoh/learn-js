function round(num) {
    let res = [];
    for (let i = 0; i < num.length; i++) {
        let first = Math.floor(num[i]);
        if ((num[i] - first) >= 0.5) {
            first += 1;
        };
        res.push(first);
    };
    return res;
};

// const nums = [3, -3, 3, -3, 0];
// console.log(round(nums));