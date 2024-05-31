
// ДЗ 5.4. Просте число чи ні
// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
const number = parseInt(prompt("Введіть ціле число:"));

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} - просте число`);
} else {
    console.log(`${number} - складене число`);
}