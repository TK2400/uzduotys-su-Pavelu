let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
console.log(numbers)

function arrDoubled(array) {
    const newNumbers1 = []
    array.forEach(sk => {
        newNumbers1.push(sk * 2)
    })
    return newNumbers1
}

console.log(arrDoubled(numbers))
    // //////////////

function arrDoubledX(array, x) {
    const newNumbers2 = []
    array.forEach(sk => {
        newNumbers2.push(sk * x)
    })
    return newNumbers2
}

console.log(arrDoubledX(numbers, 5))

// /////////////

function arrDoubledX1(array, x) {
    const newNumbers3 = []
    for (i = 0; i < array.length; i++) {
        /*const newItem = array[i]
        const multipliedItem = newItem * x
        newNumbers3.push(arrMultiplied * x)*/
        newNumbers3.push(array[i] * x)
    }
    return newNumbers3
}

console.log(arrDoubledX1(numbers, 6))

// ///////////

function arrCountDigits(arr, digit) {
    let counter = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === digit) {
            counter++
        }
    }
    return counter
}

console.log(arrCountDigits(numbers, 2))

//  //////////

// 4. Parašykite funkciją arrIndexOfFirst,
//  kuri grąžintu pirmo surasto, argumentu 
// nurodyto skaičiaus, indeksą masyve. 
// Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfFirst(array, value) {
    let index = -1
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = i;
            break
        }
    }
    return index
}

console.log(arrIndexOfFirst(numbers, -5))

// ///////

function arrIndexOfLast(array, value) {
    let index = -1
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = i;
        }
    }
    return index
}

console.log(arrIndexOfFirst(numbers, 6))

// ///////

// / 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

const number = 32243

function reverse(number) {
    const newDigitArray = number.toString()
    const newArray = newDigitArray.split('')
    let reversedArray = []
    for (i = newArray.length - 1; i > -1; i--) {
        reversedArray.push(newArray[i])
    }

    return (reversedArray)
}

console.log(reverse(number))


// ///////

let arrayToSort = [5, 9, 7, 2, -9, 8]


function findMinMaxOfArray(arr) {
    let max = -Number.MAX_VALUE
    let min = Number.MAX_VALUE
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }

    }
    return [max, min]


}

console.log(findMinMaxOfArray(arrayToSort))

//  ////////////////



// 9. Parašykite funckiją, kuri ras visus skaičius
//  esančius msyve ir gražins juos kaip atsikrą 
// masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo 
// mažiausio iki didžiausio.// 
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

const variousArray = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", , 10, 1];

function extractDigits(arr) {
    let digitArray = []
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            digitArray.push(arr[i])
        }
    }
    return digitArray
}

console.log(extractDigits(variousArray))

/* 10. Sukurkite funkciję checkIfAllSmaller(arr, max), 
BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai 
masyve yra mazesni negu perduota reikšmė max;
 Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
 Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False*/

const varArray = [2, 7, 6, 16, 5];

function checkIfAllSmaller(arr, max) {
    let element = true
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            element = false
            break
        }
    }
    return element
}

console.log(checkIfAllSmaller(varArray, 17))