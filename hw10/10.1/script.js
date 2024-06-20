

// ДЗ 10.1. Картка користувача
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

let user = {
  name: 'Bogdan',
  age: 25,
  city: 'Kyiv',
  
  enterData: function () {
      this.name = prompt('Enter your name?');
      this.age = prompt('Enter your age?');
      this.city = prompt('Enter your city"?');
  },

  getUserInfo: function() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Location: ${this.city}`);
  }

 
};
user.enterData();// запросит ввести данные
user.getUserInfo();// выведет в консоль ввде списка дынных
