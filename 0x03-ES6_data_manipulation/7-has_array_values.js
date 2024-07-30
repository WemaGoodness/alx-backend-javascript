function hasValuesFromArray(set, arr) {
    return arr.every((element) => set.has(element));
}

const mySet = new Set([1, 2, 3, 4, 5]);
console.log(hasValuesFromArray(mySet, [1]));
console.log(hasValuesFromArray(mySet, [10]));
console.log(hasValuesFromArray(mySet, [1, 10]));
