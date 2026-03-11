function splitEvenOdd(arr) {
    const evenNumbers = [];
    const oddNumbers = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i])
        }
    }
    return evenNumbers.concat(oddNumbers);
}


console.log(splitEvenOdd([1, 2, 3, 4, 5, 6]));

function avarageOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    const avarage = sum / arr.length;
    return Math.round(avarage * 100) / 100;
}
console.log(avarageOfArray([10, 20, 30, 40]));

function censorWord(str, word) {
    const regax = new RegExp(`\\b${word}\\b`, 'gi');
    return str.replace(regax, 'ЦЕНЗУРА');
}
console.log(censorWord("JavaScript  это круто. Я люблю Script!", "JavaScript"));

function addToCart(cart, productName, amount) {
    if (cart.hasOwnProperty(productName)) {
        cart[productName] += amount;
    } else {
        cart[productName] = amount;
    }
    return cart;
}
const shoppingCart = { "яблоки": 5, "бананы": 3, "молоко": 1 };
console.log(addToCart(shoppingCart, "яблоки", 2));

function swapKeysAndValues(obj) {
    const swapped = {}

    for (const [key, value] of Object.entries(obj)) {
        swapped[value] = key
    }
    return swapped;
}
console.log(swapKeysAndValues({
    "name": "Иван",
    "age": "25",
    "city": "Курск"
}))

function filterStrings(arr, minLength) {
    return arr.filter(function(str) {
        return str.length >= minLength
    });
}

console.log(filterStrings(["кошка", "собака", "корова"], 2));

function delayMessage(message, delayMs, callback) {
    setTimeout(() => {
        console.log(message);

        if (typeof callback === 'function') {
            callback();
        }
    }, delayMs)
}
delayMessage("Привет через 2 секуннды", 2000, ()  => {
    console.log("Callback выполнен")
})