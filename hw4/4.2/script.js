
// ДЗ 4.2. Перевірка числа
// Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

function checkNumber(number) {
    let digits = number.toString().split('').map(Number);
    let allSame = true;
    let hasDuplicates = false;
    for (let i = 1; i < digits.length; i++) {
        if (digits[i] !== digits[0]) {
            allSame = false;
            break;
        }
    }
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] === digits[j]) {
                hasDuplicates = true;
                break;
            }
        }
        if (hasDuplicates) {
            break;
        }
    }
    return {
        allSame: allSame,
        hasDuplicates: hasDuplicates
    };
}
let userInput = prompt("Введіть тризначне число:");
let result = checkNumber(userInput);
if (userInput.length !== 3 || isNaN(userInput)) {
    alert("Будь ласка, введіть правильне тризначне число.");
} else {
    let message = "Всі цифри однакові: " + result.allSame + "\nЄ хоча б дві однакові цифри: " + result.hasDuplicates;
    console.log(message);
    alert(message);
}
