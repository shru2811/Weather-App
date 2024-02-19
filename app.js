const apiKey = "a7515a1dffde50cc5f501aa507b4cb3a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

let search = document.querySelector(".search input");
let btn = document.querySelector(".search button");
btn.addEventListener("click",function(){
    checkWeather(search.value);
    // console.log("button clicked");
});
async function checkWeather(cityName){
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${cityName}`);
    var data = await response.json();
    let city = document.querySelector(".city");
    console.log(data);
    city.innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed;
    document.querySelector(".weather img").setAttribute("src",`./Assets/${data.weather[0].main}.png`);
}

