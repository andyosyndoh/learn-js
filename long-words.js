function longWords(arr) {
    let match = arr.filter(obj => typeof obj === 'string' && obj.length >= 5) || [];
    return match
}

function oneLongWord(arr) {
    return arr.filter(obj => typeof obj === 'string' && obj.length >= 10) || [];

}

function noLongWords(arr) {
    return !arr.some(obj => typeof obj === 'string' && obj.length >= 7);
}
