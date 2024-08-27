function sign(num) {
    if (num === 0) {
        return 0;
    };
    if (num > 0 ) {
        return 1;
    };
    return -1;
};

function sameSign(num1,num2) {
    if (num1 < 0 && num2 < 0) {
        return true;
    };
    if (num1 > 0 && num2 > 0) {
        return true;
    };
    if (num1 === 0 && num2 === 0) {
        return true;
    };
    return false;
}