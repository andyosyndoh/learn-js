function multiply(a, b) {
    if (b === 1) {
        return a;
    };
    let ans = 0
    for (let i = 0; i < b; i++) {
        ans += a;
    };
    return ans
};

function divide(a, b) {
    return a / b;
};

function modulo(a, b) {
    return a % b;
};

console.log(multiply(34, 78));