function sameAmount(str, regex1, regex2) {
    const matches1 = str.match(regex1);
    const matches2 = str.match(regex2);

    if (!matches1 && !matches2) {
        return true;
    }

    return (matches1 ? matches1.length : 0) === (matches2 ? matches2.length : 0);
}

const data = "some string without qqqqqqq";
console.log(!sameAmount(data, /q /, /qqqqqqq/)); // Output: true