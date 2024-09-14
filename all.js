async function all(obj = {}) {
    var res = {};
    if (Object.keys(obj).length === 0) return {};
    for (let key in obj) {
        res[key] = await obj[key];
    }
    return res;
}