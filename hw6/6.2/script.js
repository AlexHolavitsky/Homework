
// ДЗ 6.2. Визначення середнього арифметичного.
// Дано масив з елементами різних типів.
//  Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function calculateAverageNumericElements(arr) {
   let sum = 0;
   let count = 0;

   for (let i = 0; i < arr.length; i++) {
       if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
           sum += arr[i];
           count++;
       }
   }

   if (count === 0) {
       return 0; // Повертаємо 0, якщо в масиві немає числових елементів
   }

   return sum / count;
}

// Приклад використання:
let arr = [1, 2, 'a', 'b', 3, 4];
let average = calculateAverageNumericElements(arr);
console.log(average);  
