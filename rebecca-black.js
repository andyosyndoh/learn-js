function isFriday(date){
    let dayOfWeek = date.getDay();
    return dayOfWeek === 5;
}

function isWeekend(date){
    let dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}

function isLeapYear(date) {
    let year = date.getFullYear();
    return year % 4 === 0;
}

function isLastDayOfMonth(date) {
    const testDate = new Date(date);
    testDate.setDate(testDate.getDate() + 1); 
    return testDate.getMonth() !== date.getMonth();
}
