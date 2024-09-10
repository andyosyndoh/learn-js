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
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (res.slice(0, 1) === ":" && res.slice(-1) !== ":") res = res.slice(1);
    }
    return res;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>(acc += (cr.length <= 4) & 1), 0))
// output: carbohydrates, protein, fat