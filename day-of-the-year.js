function dayOfTheYear(date) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Invalid Date");
    }
  
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const diffInMilliseconds = date - startOfYear;
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const dayOfYear = Math.floor(diffInMilliseconds / millisecondsInADay) + 1;
    
    if (dayOfYear <= 0) return 1;
    return dayOfYear;
}

console.log(dayOfTheYear(new Date(Date.now())));