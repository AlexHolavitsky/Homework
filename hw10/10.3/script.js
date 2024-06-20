


// ДЗ 10.3. Книга контактів
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі.
//  Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
//  Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
let contactBook = {
  contacts: [
      { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
      { name: 'Poul Smith', phone: '987-654-', email: 'Poul@example.com' },
      { name: 'Alex Backer', phone: '987-3210', email: 'Alex@example.com' },
      { name: 'Sara Conor', phone: '654-3210', email: 'Sara@example.com' },
  ],

  // Метод для поиска контакта по имени
  findContactByName: function(name) {
      return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  },
  
  // Метод для добавления нового контакта
  addContact: function(name, phone, email) {
      this.contacts.push({ name, phone, email });
  }
};

// Поиск контакта по имени
let contact = contactBook.findContactByName('Sara Conor');//нужно ввести имя и фамилию
console.log(contact); // Выведет { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' }

// Добавление нового контакта
contactBook.addContact('Alice Johnson', '555-555-5555', 'alice@example.com');

// Проверка добавления нового контакта
console.log(contactBook.contacts);