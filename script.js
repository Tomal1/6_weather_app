let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityName = document.querySelector("#cityName");
let card = document.querySelector("#card");
let dispContainer = document.querySelector("#dispContainer");


searchBtn.addEventListener("click", function(event){
    event.preventDefault(); // our function is inside a form so we have to stop it from submitting

//    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=52.4492074&lon=-2.0514646&appid=58fa8407237375f8467842ce20027a4c")
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityInput.value+"&appid=58fa8407237375f8467842ce20027a4c")
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        //Using console.log to examine the data
        console.log(data);

        cityName.textContent = "--"+data.city.name+"--";

        
        document.querySelector(".tempature").textContent = "tempature: " + Math.round(data.list[0].main.temp - 273.15) + "C";
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
        document.querySelector(".date").textContent = "date: " + data.list[0].dt_txt;
        document.querySelector(".humidity").textContent = "humidity: " + data.list[0].main.humidity +"%";
        document.querySelector(".wind").textContent = "wind speed: "+ data.list[0].wind.speed + " mph";
       
    });
})