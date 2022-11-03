let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityName = document.querySelector("#cityName");
let card = document.querySelectorAll("#card");
let dispContainer = document.querySelector("#dispContainer");


let date = document.querySelectorAll(".date")
let icon = document.querySelectorAll(".icon");
let temp = document.querySelectorAll(".tempature");
let humidity = document.querySelectorAll(".humidity");
let wind = document.querySelectorAll(".wind");









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

        for(let i=0; i<5; i++){
            date[i].textContent = "date: "+data.list[i].dt_txt;
        }

        for(let i=0; i<5; i++){
            icon[i].src="http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
        }
        
        
        for(let i=0; i<5; i++){
            temp[i].textContent = "tempature: "+Math.round(data.list[i].main.temp - 273.15)+"C";
        }

        for(let i=0; i<5; i++){
            humidity[i].textContent = "humidity: "+data.list[i].main.humidity+"%";
        }

        for(let i=0; i<5; i++){
            wind[i].textContent = "wind speed: "+data.list[i].wind.speed+" mph";
        }
       
    });
})