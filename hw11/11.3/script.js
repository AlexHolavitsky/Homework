


// ДЗ 11.3. Отримання випадкового зображення
// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)

document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('random-image');
    const button = document.getElementById('change-image-button');
    const imageCount = 9; // Количество изображений

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageCount) + 1;
        return `images/${randomIndex}.jpg`;
    }

    function showRandomImage() {
        const randomImage = getRandomImage();
        imageElement.src = randomImage;
    }

    // Отобразить случайное изображение при загрузке страницы
    showRandomImage();

    // Изменить изображение при нажатии на кнопку
    button.addEventListener('click', showRandomImage);
});