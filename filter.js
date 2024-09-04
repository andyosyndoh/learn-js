function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

function reject(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

function partition(array, callback) {

    const trueResults = [];
    const falseResults = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            trueResults.push(array[i]);
        } else {
            falseResults.push(array[i]);
        }
    }

    return [trueResults, falseResults];
}

