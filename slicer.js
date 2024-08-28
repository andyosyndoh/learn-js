function slice(arr, start, end){
    let finish = arr.length;
    if (end !== undefined){
        finish = end;
    };
    return arr.slice(start,finish);
};