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
  }, delayMs);
}

delayMessage("Привет через 2 секунды", 2000, () => {
  console.log("Callback выполнен");
});
// const pattern = 'hello';
// const regex = new RegeExp(pattern);
// console.log(regex);
// const text = 'hello word';
// // str.match(regex);

// console.log(text.match(regex))

// console.log(regex.test('hello world'));

// /\d/  digit(0-9)
// /\D/   НЕ цифра
// /\w/ любая латинская цифра или знак подчеркиваний
// /\W/ всё что не входит в /W
// /\s/ пробелы табуляция и перевод строки
// /\S/ любой не пробелный символ
// /\./ любой символ кроме переноса строки

// const phone = '123-456'
// console.log(/\d\d\d-\d\d\d/.test(phone));

// /\d{n}/ продублировать ровно n раз
// /\d{n, m}/  продублировать от n до m раз /\(3, 5)/

// /\d{n,}/ n и более раз

// console.log(/colou?r/.trst('color'))
// console.log(/colou?r/.trst('colour'))

// Якоря - ищут позицию в строке
// ^ - начало строки
// $ - конец строки

// const regex = /^\d{5}$/;
// console.log(regex.test('12334'));
// console.log(regex.test('12334555'));
// console.log(regex.test('1asdasd'));


// Наборы и диапазоны

// [abc] - либо a либо b  либо c
// [a-z] - любая строчная внутри данного диапазона
// [0-9] - аналог \d
// [а-яё] - любая русская буква
// [^abc] - любой символ кроме введённых поле ^

// console.log(/^[A-Z]/.test('Hello'));
// console.log(/hello/i.test('Hello'));

// console.log([1,2,3,4].match(/\d/g)); g - ищет все совподение

// function validateEmail(email) {
//     const regex = /^[\w.-]+@[a-z-]+\.\[a-z]{2,6}$/
//     return regex.test(email);

// }
// console.log(validateEmail('aghunik.sahakyan@mail.ru'));