function round(num) {
    for (let i = 0; i < num.length; i++) {
        let first = Math.floor(num[i]);
        if ((num[i] - first) > 0.5) first += 1;
        return first;
    };
};