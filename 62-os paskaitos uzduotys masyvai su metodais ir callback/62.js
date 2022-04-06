const arr = [3, 10, 20, 60, 50, 100];

// function multiplyNumber(element, index, array) {
//     return element * 2;
// }
// const formattedArray = arr.map(multiplyNumber);

// console.log(formattedArray);

function map(array, callback) {
    const newArray = []
    for (i = 0; i < arr.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}


const callback = x => x * x
console.log(map(arr, callback))

// ............

function applyMathMethod(a, b, mathMethod) {
    const result = mathMethod(a, b)
    return result
}

function addNumbers(x, y) {
    return x + y
}

const addResult = applyMathMethod(10, 20, addNumbers)
console.log(addResult)

// ............

// funkcija priima tris paramterus, filter callback,
// grazinti kazka

function applyFilter(a, b, c, filterCallBack) {
    const result = filterCallBack(a, b, c)
    return result
}

function filterCallBack(a, b, c) {
    let result = ''
    if ((a + b + c) > (b * c)) {
        result = "a, b, c suma yra daugiau nei b ir c sandauga"
    } else if ((a + b + c) < (b * c)) {
        result = "a, b, c suma yra maziau nei b ir c sandauga"
    } else if ((a + b + c) === (b * c)) {
        result = "a, b, c suma yra lygi b ir c sandaugai"
    }
    return result
}

const lastResult = applyFilter(0, 2, 3, filterCallBack)
console.log(lastResult)

//  filter funkcija ................

const mass = [10, 2, 3, 4, 15, 16, 47, 58, 29, 146]

function moreThan15(value, index, array) {
    return value > 15
}

function lessThan15(element, index, array) {
    return element < 15
}


function filter(arr, callback) {
    const newArr = []
    for (i = 0; i < arr.length; i++) {
        const result = callback(arr[i])
        if (result) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filter(mass, moreThan15))
console.log(filter(mass, lessThan15))

console.log(mass)