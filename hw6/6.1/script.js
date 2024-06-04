// ДЗ 6.1. Написати функцію видалення масиву символів
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач.

function removeCharacters(inputString, charactersToRemove) {
   for (let char of charactersToRemove) {
       inputString = inputString.split(char).join('');
   }
   return inputString;
}

// Функція для отримання рядка та символів від користувача
function getUserInput() {
   let inputString = prompt("Введіть рядок:");
   let charactersToRemove = prompt("Введіть символи, які потрібно видалити (без пробілів):").split('');
   return [inputString, charactersToRemove];
}

// Отримання введення від користувача
let [inputString, charactersToRemove] = getUserInput();

// Виклик функції removeCharacters зі введеними даними
let result = removeCharacters(inputString, charactersToRemove);
console.log("Результат видалення символів:", result);

