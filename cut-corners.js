function round(num) {
    let first = Math.Floor(num);

    if ((num - first) > 0.5) first += 1;
    return first;
};