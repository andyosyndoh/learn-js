function split(str, sep) {
    // let res = [];
    // let st = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (slice(str, i, i + s.length) === s) {
    //         res.push(slice(str, st, i));
    //         st = i + s.length;
    //         i = st
    //     } else if (i === str.length - 1) {
    //         res.push(slice(str, st, str.length));
    //     };
    // };
    // if (slice(str, str.length-s.length, str.length) === s){
    //     res.push('')
    // }
    // return res
    const result = [];
    let current = "";
    let separator = sep;
    if (separator !== " ") separator = trimSpaces(sep);

    if (separator === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }

    for (let i = 0; i < str.length; i++) {
        let match = true;
        for (let j = 0; j < separator.length; j++) {
            if (str[i + j] !== separator[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            // if (current.trim() !== "") {
            result.push(current.trim());
            // }
            current = "";
            i += separator.length - 1;
        } else {
            current += str[i];
        }
    }

    // if (current.trim() !== "") {
    result.push(current.trim());
    // }

    return result;
};

function join(str, s) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            res += str + s;
        } else {
            res += str
        };
    };
    return res
}

function trimSpaces(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) result += input[i];
    return result.trim();
}

// console.log(split('a b c', ' '));
// console.log(split('ggg - ddd - b', ' - '))
console.log(split('ee,ff,g,', ','))
console.log(split('rrrr', 'rr'))