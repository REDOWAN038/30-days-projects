const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apiKey = '&appid=92e8579cb1998e7ca402a365d8b148f2'

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function getWeatherInfo(city) {

    const response = await fetch(api + city + apiKey)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json()

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
        document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    getWeatherInfo(searchBox.value)
})