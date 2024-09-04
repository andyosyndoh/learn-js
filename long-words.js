function longWords(arr) {
    return arr.filter(obj => typeof obj === 'string' && obj.length >= 5);
}

function oneLongWord(arr) {
    return arr.filter(obj => typeof obj === 'string' && obj.length >= 10);

}

function noLongWords(arr) {
    return !arr.some(obj => typeof obj === 'string' && obj.length >= 7);
}
