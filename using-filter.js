function filterShortStateName(arr) {
    return arr.filter(str => str.length < 7)
}

function filterStartVowel(arr) {
    let vowels = /^[aeiouAEIOU]/;
    return arr.filter(str => vowels.test(str))
}

function filter5Vowels(strings) {
    function countVowels(str) {
        const match = str.match(/[aeiouAEIOU]/g);
        return match ? match.length : 0;
    }

    return strings.filter(str => countVowels(str) >= 5);
}

function filter1DistinctVowel(strings) {
    function getDistinctVowels(str) {
        const vowels = new Set(str.toLowerCase().match(/[aeiou]/g));
        return vowels.size;
    }

    return strings.filter(str => getDistinctVowels(str) === 1);
}

function multiFilter(objects) {
    function containsVowel(str) {
        return /[aeiouAEIOU]/.test(str);
    }

    return objects.filter(obj => {
        const { capital, name, tag, region } = obj;
        return (
            capital.length >= 8 &&
            !/^[aeiouAEIOU]/.test(name) &&
            containsVowel(tag) &&
            region !== 'South'
        );
    });
}