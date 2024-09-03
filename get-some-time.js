function firstDayWeek(weekNumber, year) {
    const janFirst = new Date(`${year}-01-01`);
    
    let dayOfWeek = janFirst.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7; 

    const daysToMonday = 8 - dayOfWeek;
    const firstMonday = new Date(janFirst);
    firstMonday.setDate(janFirst.getDate() + daysToMonday);

    const targetMonday = new Date(firstMonday);
    targetMonday.setDate(firstMonday.getDate() + (weekNumber - 2) * 7);

    if (targetMonday.getFullYear() < janFirst.getFullYear()) {
      targetMonday.setFullYear(janFirst.getFullYear());
      targetMonday.setMonth(0); 
      targetMonday.setDate(1); 
    }

    const day = String(targetMonday.getDate()).padStart(2, '0');
    const month = String(targetMonday.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${day}-${month}-${targetMonday.getFullYear().toString().padStart(4, '0')}`;
    return formattedDate;
  }

console.log(firstDayWeek(52, '2023'))
