function citiesOnly(arr) {
    return arr.map(object => object.city.trim())

}

function upperCasingStates(cities) {
    return cities.map(state => state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
}

function fahrenheitToCelsius(temps) {
    return temps.map(temp => {
        const fahrenheit = parseFloat(temp.replace('°F', '').trim());

        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);

        return `${celsius}°C`;
    });
}

function trimTemp(arr) {
    return arr.map(obj => ({
        ...obj, temperature: obj.temperature.replace(/\s+/g, '')
    }));
}

function tempForecasts(arr) {
    return arr.map(obj => {
        const city = obj.city;
        const state = upperCasingStates(obj.state);
        const fahrenheit = parseFloat(obj.temperature.replace(/\s+°F/, ''));

        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);

        return `${celsius}°Celsius in ${city}, ${state}`;
    });
}


// console.log(citiesOnly([
//     {
//         city: 'Los Angeles',
//         temperature: '  101 °F   ',
//     },
//     {
//         city: 'San Francisco',
//         temperature: ' 84 ° F   ',
//     },
// ]))

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]))

console.log(upperCasingStates(['alabama', 'new jersey']))

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

console.log(tempForecasts([
    {
        city: 'Pasadena',
        temperature: ' 101 °F',
        state: 'california',
        region: 'West',
    },
]))