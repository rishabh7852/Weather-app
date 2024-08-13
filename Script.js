const inputBox = document.querySelector('.input-box');
const searchButton = document.getElementById('search-Button');
const WeatherImage = document.querySelector('.Weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed')
const locationNot = document.querySelector('.location-not');
const WeatherBody = document.querySelector('.Weather-body')



async function checkWeather(city) {
    const api_key = "983524f7d18e1c9003eeda5ce8a98cf5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherData = await fetch(url).then(response => response.json());


    if (weatherData.cod === `404`) {
        locationNot.style.display = "flex";
        WeatherBody.style.display = "none"

        return

    }
    WeatherBody.style.display = "flex"
    locationNot.style.display = "none";

    console.log(weatherData);

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15
    )}°C`
    description.innerHTML = `${weatherData.
        weather[0].
        description
        }`
    humidity.innerHTML = `${weatherData.main.humidity
        }%`
    windspeed.innerHTML = `${weatherData.wind.speed}km/H`

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            WeatherImage.src = "../Assets/cloud.png";
            break
        case 'Clear':
            WeatherImage.src = "../Assets/clear.png";
            break
        case 'Rain':
            WeatherImage.src = "../Assets/rain.png";
            break
        case 'Mist':
            WeatherImage.src = "../Assets/mist.png";
            break
        case 'snow':
            WeatherImage.src = "../Assets/snow.png";
            break
    }

}
searchButton.addEventListener('click', () => {
    checkWeather(inputBox.value);



})