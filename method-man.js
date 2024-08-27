function words(str) {
    return str.split(" ");
};

function sentence(str) {
    return str.join(" ");
};

function yell(str) {
    return str.toUpperCase();
};

function whisper(str) {
    return str.toLowerCase();
};

function capitalize (str) {
    const first = str(0).toUpperCase();
    const rest = str(1).toLowerCase();
    return first + rest;
};