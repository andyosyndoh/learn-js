const escapeStr = "`\\\/\"'";
const arr = [4, '2'];
const obj = {
    str: "hello",
    num: 3,
    bool: true,
    undef: undefined
};
const nested = {
    arr:
        [4, undefined, '2'],
    obj: {
        str: "hello",
        num: 0,
        bool: true
    }
};

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);


