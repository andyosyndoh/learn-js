function ionOut(str) {
    const regex = /\b\w*tion\b/g;

    let arr = str.split(" ");
    let res = [];
    for (let s of arr) {
        const matches = s.match(regex) || [];
        if (matches.length > 0) {
            if (s[s.length-1] === ','){
                s = s.slice(0,-1)
            }
            res.push(s.slice(0, s.length-3));
        };
    };
    return res;
}

console.log(ionOut('attention, direction'));