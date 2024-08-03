const apiKey = "31e51379db084b1e46a4a72a5e327545";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=31e51379db084b1e46a4a72a5e327545";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cloudVideo = document.getElementById('cloudVideo');
const rainVideo = document.getElementById('rainVideo');
const mistVideo = document.getElementById('mistVideo');
const drizzleVideo = document.getElementById('drizzleVideo');
const clearVideo = document.getElementById('clearVideo');
const hazeVideo = document.getElementById('hazeVideo');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".condition").innerHTML = data.weather[0].main;


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        cloudVideo.style.display = 'block'; // Show cloud video
        rainVideo.style.display = 'none'; // Hide rain video
        mistVideo.style.display = 'none'; // Hide mist video
        drizzleVideo.style.display = 'none';
        clearVideo.style.display = 'none';
        document.body.style.backgroundImage = "none"; // Hide static background
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        document.body.style.backgroundImage = "url('images/clear-bg.jpg')";
        clearVideo.style.display = 'block';
        cloudVideo.style.display = 'none'; // Hide cloud video
        rainVideo.style.display = 'none'; // Hide rain video
        mistVideo.style.display = 'none'; // Hide mist video
        drizzleVideo.style.display = 'none';
        document.body.style.backgroundImage = "none";
    }

    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "images/haze.png";
        document.body.style.backgroundImage = "url('images/clear-bg.jpg')";
        hazeVideo.style.display = 'block';
        clearVideo.style.display = 'none';
        cloudVideo.style.display = 'none'; // Hide cloud video
        rainVideo.style.display = 'none'; // Hide rain video
        mistVideo.style.display = 'none'; // Hide mist video
        drizzleVideo.style.display = 'none';
        document.body.style.backgroundImage = "none";
    }

    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        rainVideo.style.display = 'block'; // Show rain video
        cloudVideo.style.display = 'none'; // Hide cloud video
        mistVideo.style.display = 'none'; // Hide mist video
        drizzleVideo.style.display = 'none';
        clearVideo.style.display = 'none';
        document.body.style.backgroundImage = "none"; // Hide static background
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        drizzleVideo.style.display = 'block';
        mistVideo.style.display = 'none'; //  
        cloudVideo.style.display = 'none'; // Hide cloud video
        rainVideo.style.display = 'none'; // Hide rain video
        clearVideo.style.display = 'none';
        document.body.style.backgroundImage = "none"; // Hide static background
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        mistVideo.style.display = 'block'; // Show mist video
        cloudVideo.style.display = 'none'; // Hide cloud video
        rainVideo.style.display = 'none'; // Hide rain video
        drizzleVideo.style.display = 'none';
        clearVideo.style.display = 'none';
        document.body.style.backgroundImage = "none"; // Hide static background
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
