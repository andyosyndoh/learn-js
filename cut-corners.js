function round(num) {
    let first = math.Floor(num);

    if ((num - first) > 0.5) first += 1;
    return first;
};