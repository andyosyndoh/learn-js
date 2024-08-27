const is = {}

is.num = function (x) {
    return typeof x === 'number';
};

is.nan = function (x) {
    return typeof x === 'NaN';
};

is.str = function (x) {
    return typeof x === 'string';
};

is.bool = function (x) {
    return typeof x === 'boolean';
};
num
is.undef = function (x) {
    return typeof x === 'undefined';
};

is.def = function (x) {
    return typeof x != 'undefined';
};

is.arr = function (x) {
    return typeof x === 'array';
};

is.obj = function (x) {
    return typeof x === 'null';
};

is.fun = function (x) {
    return typeof x === 'function';
};

is.truthy = function(value) {
    return !!value;
};

is.falsy = function(value) {
    return !value;
};