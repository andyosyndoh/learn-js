function round(num) {
    let res = [];
    for (let i = 0; i < num.length; i++) {
        let first = Math.floor(num[i]);
        if ((num[i] - first) >= 0.5) {
            let ans = first + 1;
            res.push(ans);
        } else {
            res.push(first);
        };

    };
    return res;
};

// const nums = [3, -3, 3, -3, 0];
// console.log(round(nums));