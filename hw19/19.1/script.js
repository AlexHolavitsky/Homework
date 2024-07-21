// ДЗ 19.1. Віджет погоди
// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.

// const apiKey = 'YOUR_API_KEY'; // Вставте сюди свій API ключ OpenWeatherMap
// const city = 'Kyiv'; // Місто, для якого ви хочете отримати погоду
// const weatherDiv = document.getElementById('weather');
// const updateButton = document.getElementById('updateButton');

// async function fetchWeather() {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//         if (!response.ok) {
//             throw new Error('Weather data not available');
//         }
//         const data = await response.json();
//         displayWeather(data);
//     } catch (error) {
//         weatherDiv.textContent = error.message;
//     }
// }

// function displayWeather(data) {
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;
//     weatherDiv.textContent = `Temperature in ${city}: ${temperature}°C, ${weatherDescription}`;
// }

// updateButton.addEventListener('click', fetchWeather);

// // Перший виклик для завантаження погоди при завантаженні сторінки
// fetchWeather();

const productsEl = document.querySelector('.js-products');
const URL_PRODUCTS = "https://fakestoreapi.com/products";

function renderProducts(products) {
  console.log("renderProducts");

  products.forEach((products) => {
    productsEl.innerHTML += `
              <div id='${product.id}' class="card">
                  <img src="${product.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.description} <p>
                      <p>${product.price} <p>
                      <a href="#" class="btn btn-primary">Buy</a>
                  </div>
              </div>     
          `;
  })
}

function showError(error) {
  console.log("error");
}

async function fetchProducts() {
  try {
    let response = await fetch(URL_PRODUCTS);
    console.log(response);
    let data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(`${data.status} ${data.message}`);
    }
    renderProducts(data);
  } catch (error) {
    console.log(error);
    showError(error);
  }
}

fetchProducts();
