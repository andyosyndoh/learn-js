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
        return -ans;
    }
    return ans;
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
        return -quotient;
    };
    return quotient;
};

function modulo(a, b) {
    let c = divide(a, b);
    const diff = multiply(b, c);
    return a - diff;
};

function round(num) {
    let neg = false;
    if (num < 0) {
        num = -num;
        neg = true;
    };
    let rem = modulo(num, 1);
    let whole = num - rem;
    if (rem >= 0.5) {
        whole += 1;
    };

    if (neg) {
        whole = -whole;
    };
    return whole;
};

function floor(num) {
    let neg = false;
    if (num < 0) {
        num = (num * -1);
        neg = true;
    };
    let rem = modulo(num, 1);
    let whole = num - rem;
    // if (neg === true) {
    //     return (whole * -1);
    // } else {
    //     return whole;
    // };
    return neg ? -whole - 1 : whole;
};

function ceil(num) {
    let neg = false;
    if (num < 0) {
        num = (num * -1);
        neg = true;
    };
    let rem = modulo(num, 1);
    let whole = num - rem;
    if (rem === 0 && !neg) {
        return whole;
    };
    return neg ? -whole : whole + 1;
};

function trunc(num) {
    let count = 0;
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        count += 0xfffffffff;
    };
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    };
    let copy = num;
    while (!(copy< 1 && copy > -1)){
        copy -=1;
        count++;
    };
    if (neg) {
        return -count;
    }
    return count;
};


