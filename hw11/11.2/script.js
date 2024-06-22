

// ДЗ 11.2. Кнопка зміни кольору
// Є блок із текстом на сторінці та кнопку. 
// При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

document.addEventListener('DOMContentLoaded', function() {
  const textBlock = document.getElementById('text-block');
  const button = document.getElementById('color-toggle-button');

  let isOriginalColor = true;
  const originalColor = 'black';
  const newColor = 'blue';

  button.addEventListener('click', function() {
      if (isOriginalColor) {
          textBlock.style.color = newColor;
      } else {
          textBlock.style.color = originalColor;
      }
      isOriginalColor = !isOriginalColor;
  });
});