function cleanSet(set, startString) {
    const filteredValues = [...set].filter((value) => value.startsWith(startString));

    return filteredValues.join("-");
}

const mySet = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
console.log(cleanSet(mySet, 'bon'));
console.log(cleanSet(mySet, ''));
