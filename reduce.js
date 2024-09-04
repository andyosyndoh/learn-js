function fold(array, func, accumulator) {
    let result = accumulator;
    for (let i = 0; i < array.length; i++) {
        result = func(result, array[i], i, array);
    }

    return result;
}

function foldRight(array, func, accumulator) {
    let result = accumulator;

    for (let i = array.length - 1; i >= 0; i--) {
        result = func(result, array[i], i, array);
    }

    return result;
}

function reduce(array, func) {
    let accumulator = array[0];
    for (let i = 1; i < array.length; i++) {
        accumulator = func(accumulator, array[i], i, array);
    }

    return accumulator;
}

function reduceRight(array, func) {
    let accumulator = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        accumulator = func(accumulator, array[i], i, array);
    }

    return accumulator;
}
