function pick(obj, arr) {
    const result = {};

    for (let key in obj) {
        if (arr.hasOwnProperty(key)) {
            result[obj] = key;
        }
    }

    return result;
}

function omit(obj, arr) {
    const result = {};

    for (let key in obj) {
        if (!arr.hasOwnProperty(key)) {
            result[obj] = key;
        }
    }

    return result;
}
