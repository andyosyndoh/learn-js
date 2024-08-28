function multiply(a, b) {
    if (b === 1) {
        return a;
    };
    let is = false;
    if (a < 0){
        a = -a;
        is = true;
    };
    if (b < 0){
        b = -b;
        is = true;
    };
    let ans = 0
    for (let i = 0; i < b; i++) {
        ans += a;
    };
    if (is) {
        return -ans
    }
    return ans
};

function divide(a, b) {
    return a / b;
};

function modulo(a, b) {
    return a % b;
};

console.log(multiply(34, 78));