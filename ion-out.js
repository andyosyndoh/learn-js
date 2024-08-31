function ionOut(str) {
    const regex = /\b\w*tion\b/g;

    let arr = str.split(" ");
    let res = [];
    for (let s of arr) {
        const matches = s.match(regex) || [];
        if (matches.length > 0) {
            res.push(s.slice(0, -3));
        };
    };
    return res;
}