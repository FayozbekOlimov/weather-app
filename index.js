// ========== Selectors ========== //

const form = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

const locationCity = document.querySelector('.location');

const date = document.querySelector('.date');

const degree = document.querySelector('.degree');
const weather = document.querySelector('.weather');

const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');

// ========== Variables ========== //

const apiKey = '7a13b51f1f360b2a5e6559a9c06c1a51';
const apiAddress = `https://api.openweathermap.org/data/2.5/weather?q=`;

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const today = new Date();
const year = today.getFullYear(),
      monthIndex = today.getMonth(),
      weekIndex = today.getDay(),
      day = today.getDate();

// ========== // ========== //

date.innerText = `${week[weekIndex]}, ${month[monthIndex]} ${day}, ${year}`;

form.addEventListener('submit', getResult);

function getResult(e) {
    e.preventDefault();
    fetch(`${apiAddress}${searchInput.value}&units=metric&appid=${apiKey}`).then(request => request.json())
    .then(jsonData => showResult(jsonData));
}

function showResult(data) {
    locationCity.innerText = `${data.name}, ${data.sys.country}`;
    degree.innerText = `${Math.round(data.main.temp)}°c`;
    icon.src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    temp.innerText =  `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;
    weather.innerText = `${data.weather[0].main}`;
}