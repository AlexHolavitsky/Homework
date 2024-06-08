
// ДЗ 7.1. Замикання
// Написати функцію, яка приймає 1 параметр.
// Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27
function createSumFunction() {
    let sum = 0;
    return function(number) {
      sum += number;
      return sum;
    };
  }
  const sum = createSumFunction();

  console.log(sum(4)); // 4
  console.log(sum(6)); // 10
  console.log(sum(10)); // 20
  console.log(sum(7)); // 27