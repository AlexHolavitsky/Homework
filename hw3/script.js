
// Завдання1
// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:
// 10369
// 1 0 3 6 9
let number = 10369;
let digits = number.toString().split('').join(' ');
console.log(digits);


// Завдання2
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);
let firstString = prompt("Введіть перший рядок:");
let secondString = prompt("Введіть другий рядок:");
let thirdString = prompt("Введіть третій рядок:");
// Масив рядків
let strings = [firstString, secondString, thirdString];
// Випадкове перемішування рядків
strings.sort(() => Math.random() - 0.5);
// Вивід результуючих рядків
console.log(strings.join('\n'));


// Завдання3
// Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log
console.log(typeof undefined); // "undefined"
console.log(typeof 123); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" - це невірно, це помилка JavaScript
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"
console.log(typeof Symbol()); // "symbol"




