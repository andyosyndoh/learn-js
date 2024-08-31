let vowels = /[aeiouAEIOU]/g;

function vowelDots(str) {
    return str.replace(vowels, '$&.');
}

console.log(vowelDots('hello')); // Output: "he.llo."
console.log(vowelDots('world')); // Output: "wo.rld"
console.log(vowelDots('AEIOU')); // Output: "A.E.I.O.U."
console.log(vowelDots('JavaScript')); // Output: "Ja.va.Sc.ri.pt"