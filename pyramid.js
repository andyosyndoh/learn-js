function pyramid(s, num) {
    let spaces = ((length(num)*s.length) - s.length) / 2
    let final = '';
    for (let i = 1; i <= num; i++) {
        if (i < num) {
            final += ret(' ', spaces) + ret(s, length(i)) + "\n"
        } else {
            final += ret(' ', spaces) + ret(s, length(i))
        }
            
        spaces -= s.length
    }
    return final
}

function length(n) {
    let ans = 1;
    if (n === 1) {
        return ans
    }
    for (let i = 2; i <= n; i++) {
        ans += 2
    }
    return ans
}

function ret(s, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s
    }
    return result
}

console.log(pyramid('{}', 12));