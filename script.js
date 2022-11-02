let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityName = document.querySelector("#cityName");
let display = document.querySelector("#card");

searchBtn.addEventListener("click", function(event){
    event.preventDefault() // our function is inside a form so we have to stop it from submitting
    cityName.innerHTML = "--"+cityInput.value+"--"

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityInput.value+"&appid=58fa8407237375f8467842ce20027a4c")
    .then(function (response){
        response.json()
        console.log(response);
    })
})








