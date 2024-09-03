function countLeapYears(date) {
    let year = date.getFullYear()
    let count = 0;
    for (let i = 0; i < year; i++) {
        if (i%4 === 0){
            count++
        }
    }
    return count
}