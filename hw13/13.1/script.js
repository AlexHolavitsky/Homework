
// ДЗ 13.1. Валідація з RegEx
// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обовьязкове текстове поле
// Message - текстове поле не меньше 5 символів
// Phone number - обовьязкове поле типу phone. З початком на +380
// Email - email обовьязково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.

// Під час помилки показувати її під полем.



document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Отримання значень полів
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // Валідація полів
    let isValid = true;

    // Валідація поля Name
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Валідація поля Message
    if (message.length < 5) {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message must be at least 5 letters long.';
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // Валідація поля Phone
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number must start with +380 and be followed by 9 digits.';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Валідація поля Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email must be valid and contain @ and a dot.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Якщо всі поля валідні, вивести дані в консоль
    if (isValid) {
        console.log(`Name: ${name}`);
        console.log(`Message: ${message}`);
        console.log(`Phone: ${phone}`);
        console.log(`Email: ${email}`);
        
    }
});