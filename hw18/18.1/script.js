 
//  ДЗ 18.1. Таймер відліку
 
//  Реалізувати таймер відліку:

// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

 
 
 
 
 // Початковий час у секундах
 let timeLeft = 85; // наприклад, 1 хвилина і 25 секунд

 function startTimer(duration, display) {
     let timer = duration, minutes, seconds;
     const interval = setInterval(() => {
         minutes = Math.floor(timer / 60);
         seconds = timer % 60;

         // Форматування часу з провідними нулями
         minutes = minutes < 10 ? '0' + minutes : minutes;
         seconds = seconds < 10 ? '0' + seconds : seconds;

         display.textContent = minutes + ':' + seconds;

         // Коли таймер закінчується, зупинити його
         if (--timer < 0) {
             clearInterval(interval);
         }
     }, 1000);
 }

 window.onload = function () {
     const display = document.getElementById('timer');
     startTimer(timeLeft, display);
 };