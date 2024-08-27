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
    return "*" + str.toLowerCase() + "*";
};

function capitalize (str) {
    const rest = str.toLowerCase();
    const first = rest[1].toUpperCase();
    
    return "'" + first + "'";
};