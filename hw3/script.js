
// Завдання 1
// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
//  Приклад:
// 10369
// 1 0 3 6 9
let number = 10369;
let digits = number.toString().split('').join(' ');
console.log(digits);


// Завдання 2
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);
let firstString = prompt("Введіть ім'я");
let secondString = prompt("Введіть скільки вам рочків:");
let thirdString = prompt("Введіть ваш улюблений колір:");
let strings = `Привіт, Вас звуть ${firstString}, Вам ${secondString}, Ваш улюблений колір - ${thirdString}`;
console.log(strings);


// Завдання 3
// Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log
let emptyValue = null;
console.log(typeof emptyValue);// "null"
let peremennayaBezZnacheniya
console.log(typeof peremennayaBezZnacheniya); // "undefined"
let age = 25;
console.log(typeof age); // "number"
let word = "Good luck";
console.log(typeof word); // "string"
let pravda = true;
let lozh = false;
console.log(typeof pravda); // "boolean"
let bignumber = 5145455645454654545454545454n;
console.log(typeof bignumber); // "BigInt"
let person = {
name: 'Alice',
age: 30,
};
console.log(typeof person); // "object"
let uniqueID = Symbol('description');
console.log(typeof uniqueID); // "symbol"
console.log(typeof Symbol); // "function"




