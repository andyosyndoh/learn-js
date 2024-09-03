function isValid(date) {
    let result = new Date(date);
    if (result.toString() === "Invalid Date") return false;
    if (!(result instanceof Date) && typeof result !== "number") return false;
    return true
}

function isAfter(date1, date2) {
    if (date1 > date2) return true;
    return false;
}

function isBefore(date1, date2) {
    if (date1 < date2) return true;
    return false;
}

function isFuture(date) {
    const currentDate = new Date();
    if (isValid(date) && currentDate > date) return true;
    return false;
}

function isPast(date) {
    const currentDate = new Date();
    if (isValid(date) && currentDate < date) return true;
    return false;
}

console.log(isValid('2013-01-01'));
console.log(isValid(''));