
let temp = document.getElementById("temprature");

let city = document.getElementById("cityname");

let humidity = document.getElementById("Humidity");

let windSpeed = document.getElementById("windspeed");

let input = document.querySelector(".search-logo ");

let search = document.querySelector("#searching");

let URL = "https://api.openweathermap.org/data/2.5/weather?units=metricq=Germany&appid=0c69340a5fe0646205906177d29e4222";

let weatherImg = document.querySelector("#sunImg");

let afterNav = document.querySelector("#afterNav");

let error = document.querySelector("#error p");


async function dataFunction() {



    let inputData = search.value;
    console.log(inputData);

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputData}&appid=0c69340a5fe0646205906177d29e4222`);

    if (response.status == 404) {
        error.innerText = "Invalid City Name!!"
        afterNav.style.display = "none";
    }
    else {
        error.innerText = ""
        let data = await response.json();
        console.log(data); 

        temp.innerText = `${data.main.temp} ${'°c'}`;

        city.innerText = `${data.name}`;

        humidity.innerText = `${data.main.humidity} ${'%'}`;

        windSpeed.innerText = `${data.wind.speed} ${'km/h'}`;


        let weather = data.weather[0].main;
        if (weather == "Clouds") {
            weatherImg.src = "./img/cloudy.png"
        }
        else if (weather == "Rain") {
            weatherImg.src = "./img/rainy.png"
        }
        else if (weather == "Snow") {
            weatherImg.src = "./img/snow.jpeg"
        }
        else if (weather == "Smoke") {
            weatherImg.src = "./img/smoke.png"
        }

        afterNav.style.display = "block";
    }

}