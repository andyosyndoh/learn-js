function sameAmount(str, regex1, regex2) {
    const newRegex1 = new RegExp(regex1.source, 'g');
    const newRegex2 = new RegExp(regex2.source, 'g');

    function countMatches(regex) {
        const matches = str.match(regex);
        return matches ? matches.length : 0;
    }

    const count1 = countMatches(newRegex1);
    const count2 = countMatches(newRegex2);

    return count1 === count2;
}