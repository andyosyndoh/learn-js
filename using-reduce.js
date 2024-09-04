function adder(numbers, initial =0 ) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initial);
}

function sumOrMul(numbers, initial = 0) {
    return numbers.reduce((result, number) => {
        if (number % 2 === 0) {
            result *= number;
        } else {
            result += number;
        }
        return result;
    }, initial);
}

function funcExec(funcs, initialValue) {
    return funcs.reduce((accumulator, currentFunc) => currentFunc(accumulator), initialValue);
}



const numbersArray = [1, 2, 3, 4, 5];
const sum = adder(numbersArray);
console.log(sum); // Output: 15

const product = sumOrMul(numbersArray);
console.log(product); // Output: 15