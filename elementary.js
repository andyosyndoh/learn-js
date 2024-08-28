function multiply(a, b) {
    if (b === 1) {
        return a;
    };

    for (let i = 1; i < b; i++) {
        a += a;
    };
    return a
};

function divide(a, b) {
    return a / b;
};

function modulo(a, b) {
    return a % b;
};