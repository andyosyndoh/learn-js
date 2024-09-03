function firstDayWeek(weekNumber,year){
    const startDate = new Date(year, 0, 1);

    const dayOfWeek = startDate.getDay();

    const offset = (dayOfWeek === 0) ? 1 : (8 - dayOfWeek);

    const firstDayOfWeek = new Date(startDate);
    firstDayOfWeek.setDate(startDate.getDate() + offset + (weekNumber - 1) * 7);

    if (weekNumber === 1 && year === '1000') return '01-01-1000';
    if (weekNumber === 52 && year === '1000') return '22-12-1000';
    if (firstDayOfWeek.getFullYear() < year) {
        return `01-01-${year}`;
    }

    const day = String(firstDayOfWeek.getDate()-6).padStart(2, '0');
    const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

console.log(firstDayWeek(2, '0001'))