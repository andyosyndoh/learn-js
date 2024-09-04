function longWords(arr) {
    const match = arr.filter(obj => typeof obj === 'string' && obj.length >= 5) || [];
    return match.length === arr.length;
}

function oneLongWord(arr) {
    const match = arr.filter(obj => typeof obj === 'string' && obj.length >= 10) || [];
    return match.length > 0;
}

function noLongWords(arr) {
    return !arr.some(obj => typeof obj === 'string' && obj.length >= 7);
}
