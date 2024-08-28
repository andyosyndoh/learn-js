function multiply(a, b) {
    if (b === 1) {
        return a;
    };
    let is = false;
    if (a < 0 && b > 0) {
        a = -a;
        is = true;
    };
    if (b < 0 && a > 0) {
        b = -b;
        is = true;
    };
    if (b < 0 && a < 0) {
        b = -b;
        a = -a;
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
    // if (a < b) {
    //     return 0;
    // };
    if (a === 0) {
        return 0;
    };
    if (b === 0) {
        return 0;
    };
    let is = false;
    if (a < 0 && b > 0) {
        a = -a;
        is = true;
    };
    if (b < 0 && a > 0) {
        b = -b;
        is = true;
    };
    if (b < 0 && a < 0) {
        b = -b;
        a = -a;
    };

    let quotient = 0;
    while (a >= b) {
        a -= b;
        quotient++;
    };
    if (is) {
        return -quotient
    }
    return quotient;
};

function modulo(a, b) {
    return a % b;
};

console.log(multiply(34, 78));
console.log(divide(34, 78));
console.log(divide(78, 34));
console.log(divide(-123, 22));