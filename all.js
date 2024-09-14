async function all(obj = {}) {
    var res = {};
    if (Object.keys(obj).length === 0) return {};
    for (let key in objs) {
        res[key] = await objs[key];
    }
    return res;
}