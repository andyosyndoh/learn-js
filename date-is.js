// function okay(date){
//     if (date instanceof Date) return date;
//     let result = new Date(date);
// }



function isValid(date) {
    let result = new Date(date);
    if (result.toString() === "Invalid Date") {
        return false;
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    return true;
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
    if (isValid(date) && currentDate > new Date(date)) return true;
    return false;
}

function isPast(date) {
    const currentDate = new Date();
    if (isValid(date) && currentDate < new date(date)) return true;
    return false;
}

console.log(isValid('2013-01-01'));
console.log(isValid(''));
console.log(isValid(new Date()))