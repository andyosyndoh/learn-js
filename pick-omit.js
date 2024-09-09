function pick(obj, keys) {
    const result = {};

    const keyArray = Array.isArray(keys) ? keys : [keys];

    keyArray.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    });

    return result;
}

function omit(obj, keys) {
    const result = {};

    const keyArray = Array.isArray(keys) ? keys : [keys];

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !keyArray.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}
