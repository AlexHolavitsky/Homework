// ДЗ 4.1. Робота з prompt
// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

function promptUserName() {
    let userName = prompt("Введіть ваше ім'я:");    
    if (userName === "" || !isNaN(userName)) {
        return promptUserName(); 
    } else {
        return userName;
    }
}
let userName = promptUserName();
alert("Hello, " + userName + "! How are you?");


