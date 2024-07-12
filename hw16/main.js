
// ДЗ 16.1. Конструктор сутності "Студент"
// Вам потрібно зробити конструктор сутності "Студент".
//  Студент має ім'я, прізвище, рік народження — це властивості.
//  Є масив з оцінками, це також властивість.
//  І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, 
// в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, 
// щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
}

// Метод для отримання віку студента
Student.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

// Метод для додавання оцінки
Student.prototype.addGrade = function(grade) {
    if (grade >= 0 && grade <= 100) {
        this.grades.push(grade);
    } else {
        console.log('Оцінка має бути в діапазоні від 0 до 100.');
    }
};

// Метод для отримання середнього балу
Student.prototype.getAverageGrade = function() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

// Метод для відмітки присутності
Student.prototype.present = function() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    } else {
        console.log('Масив відвідуваності заповнений.');
    }
};

// Метод для відмітки відсутності
Student.prototype.absent = function() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    } else {
        console.log('Масив відвідуваності заповнений.');
    }
};

// Метод для отримання середнього відвідування
Student.prototype.getAverageAttendance = function() {
    const attendedClasses = this.attendance.filter(status => status === true).length;
    const totalClasses = this.attendance.filter(status => status !== null).length;
    return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
};

// Метод для підведення підсумків
Student.prototype.summary = function() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();
    if (averageGrade > 90 && averageAttendance > 0.9) {
        return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};

// Створення екземплярів (конкретних студентів)
const student1 = new Student('Іван', 'Петров', 2000);
const student2 = new Student('Марія', 'Іванова', 1999);
const student3 = new Student('Олег', 'Сидоров', 2001);

// Приклади використання методів
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(90);
student1.addGrade(100);
student1.addGrade(100);
student1.addGrade(100);
student1.addGrade(100);
student1.addGrade(100);
student1.addGrade(100);
student1.addGrade(100);
student1.addGrade(100);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();



console.log(`Вік студента: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Середнє відвідування: ${student1.getAverageAttendance()}`);
console.log(student1.summary());

student2.addGrade(85);
student2.addGrade(90);
student2.present();
student2.present();
student2.present();

console.log(`Вік студента: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Середнє відвідування: ${student2.getAverageAttendance()}`);
console.log(student2.summary());

student3.addGrade(70);
student3.addGrade(75);
student3.absent();
student3.absent();
console.log(`Вік студента: ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getAverageGrade()}`);
console.log(`Середнє відвідування: ${student3.getAverageAttendance()}`);
console.log(student3.summary());


