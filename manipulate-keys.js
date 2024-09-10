function filterKeys(obj, predicate) {
    return Object.keys(obj)
        .filter(predicate)
        .reduce((res, key) => {
            res[key] = obj[key];
            return res;
        }, {});
}

function mapKeys(obj, callback) {
    return Object.keys(obj)
        .map(callback)
        .reduce((res, key, i) => {
            res[key] = obj[Object.keys(obj)[i]];
            return res;
        }, {});
}

function reduceKeys(obj, callback, initialValue) {
    if (initialValue === undefined) {
        initialValue = "";
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    if (res.slice(0, 2) === ", ") res = res.slice(2);
    return res;
}