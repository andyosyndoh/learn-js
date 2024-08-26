function get(key) {
    const copy = { ...sourceObject}
    return copy[key]
};

function set(key, value) {
    return sourceObject[key] = value;
};