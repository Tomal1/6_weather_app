let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityName = document.querySelector("#cityName");

searchBtn.addEventListener("click", function(event){
    event.preventDefault() // our function is inside a form so we have to stop it from submitting

    cityName.innerHTML = "--"+cityInput.value+"--"



})








