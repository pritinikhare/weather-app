const API_KEY = `8f593d0663abf3c4de590f041165a650`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
    console.log(data);
}
const showWeather = (data) =>{
    if(data.cod == "404"){
        weather.innerHTML = `<h2> City Not Found</h2>`
        return;
    }    
    console.log(data);
    weather.innerHTML = `
    <div class=weather_update>
        <h1>Weather condition </h1>
        <h2>Location : ${data.name} (${data.sys.country})</h2>
        <h2>Temperature : ${data.main.temp} °C</h2>
        <h2>Weather : ${data.weather[0].main}</h2>
        <h2>Humidity : ${data.main.humidity}%</h2>
        <h2>Wind Speed : ${data.wind.speed} km/h</h2>
    </div>`;
}

form.addEventListener(
    "submit", function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)