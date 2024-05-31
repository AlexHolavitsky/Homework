

// ДЗ 5.2. Розрахунок валюти
// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const exchangeRate = 26; // Курс обміну: 1 долар = 26 гривень

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${uah} гривень`);
}
