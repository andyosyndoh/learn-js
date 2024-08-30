function triangle(s, num) {
    let res = '';
    for (let i = 1; i <= num; i++) {
        if (i < num) {
            res += ret(s, i) + "\n"
        } else {
            res += ret(s, i)
        }
    }
    return res
}

function ret(s, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s
    }
    return result
}

console.log(triangle('*',5));