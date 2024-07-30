function setFromArray(arr) {
    return new Set(arr);
}

const inputArray = [12, 32, 15, 78, 98, 15];
const result = setFromArray(inputArray);
console.log(result);
