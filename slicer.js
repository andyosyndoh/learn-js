function slice(arr, start, end){
    let finish = arr.length;
    if (end !== undefined){
        finish = end;
    };
    let result = '';
    for (let i= start;i < finish;i++){
        result += arr[i]
    };
    return result;
};

console.log(slice('abcdef', 2));