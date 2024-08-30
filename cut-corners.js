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

function ceil(num) {
    let neg = false;
    if (num < 0) {
        num = -num;
        neg = true;
    };
    let rem = modulo(num, 1);
    let whole = num - rem;
    if (rem !== 0) {
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
        num = -num;
        neg = true;
    };
    let rem = modulo(num, 1);
    let whole = num - rem;
    if (rem !== 0) {
        whole -= 1;
    }
    if (neg){
        whole = -whole;
    }
    return whole;
};

function trunc(num) {
    let neg = false;
    if (num < 0) {
        num = -num;
        neg = true;
    };
    let rem = modulo(num, 1);
    let whole = num - rem;

    if (neg) {
        whole = -whole;
    };
    return whole;
};
// Math.round = Math.ceil = Math.floor = Math.trunc = undefined



// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round));  // Output: [4, -4, 3, -3]
// console.log(nums.map(floor));  // Output: [3, -4, 3, -4]
// console.log(nums.map(trunc));  // Output: [3, -3, 3, -3]
// console.log(nums.map(ceil)); 
