



let number = 10369;
let digits = number.toString().split('').join(' ');
console.log(digits);






let firstString = prompt("Введіть перший рядок:");
let secondString = prompt("Введіть другий рядок:");
let thirdString = prompt("Введіть третій рядок:");

// Масив рядків
let strings = [firstString, secondString, thirdString];

// Випадкове перемішування рядків
strings.sort(() => Math.random() - 0.5);

// Вивід результуючих рядків
console.log(strings.join('\n'));






console.log(typeof undefined); // "undefined"
console.log(typeof 123); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" - це невірно, це помилка JavaScript
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"
console.log(typeof Symbol()); // "symbol"




