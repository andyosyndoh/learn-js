function matchCron(cronPattern, date) {
    const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronPattern.split(' ');

    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const dayOfWeek = date.getDay();

    function matches(pattern, value) {
        return pattern === '*' || parseInt(pattern, 10) === value;
    }

    return (
        matches(cronMinute, minute) &&
        matches(cronHour, hour) &&
        matches(cronDayOfMonth, dayOfMonth) &&
        matches(cronMonth, month) &&
        matches(cronDayOfWeek, dayOfWeek)
    );
}
