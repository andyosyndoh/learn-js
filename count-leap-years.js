function countLeapYears(date) {
    const year = date.getFullYear();
    let count = 0;
    for (let i = 0; i < year; i++) {
        if (i%4 === 0){
            count++
        }
    }
    return count
}

// function countLeapYears(date) {
//     const year = date.getFullYear();

//     function countLeapYearsUpTo(year) {
//         return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
//     }

//     return countLeapYearsUpTo(year);
// }

// Convert the timestamp to a Date object
// console.log(countLeapYears(new Date(Date.now())));
