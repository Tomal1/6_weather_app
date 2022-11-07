let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityName = document.querySelector("#cityName");
let dispContainer = document.querySelector("#dispContainer");

let dateDisplay = document.querySelectorAll(".date");
let icon = document.querySelectorAll(".icon");
let temp = document.querySelectorAll(".tempature");
let humidity = document.querySelectorAll(".humidity");
let wind = document.querySelectorAll(".wind");

dispContainer.style.visibility = "hidden";

function newSearch(event) {
  event.preventDefault(); // our function is inside a form so we have to stop it from submitting
  search(cityInput.value);
}

function search(arg) {
  // was cityName
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      arg + //
      "&appid=58fa8407237375f8467842ce20027a4c"
  )
    .then(function (response) {
      console.log(response);

      if (response.status === 404) {
        cityName.textContent = "'" + arg.value + "'" + " is not a valid city";
        dispContainer.style.visibility = "hidden";
      } else if (arg === "") {
        alert("input field is required");
        cityName.textContent = "location name";
        dispContainer.style.visibility = "hidden";
      } else if (response.status === 200) {
        dispContainer.style.visibility = "visible";
      }

      return response.json();
    })
    .then(function (data) {
      console.log(data);

      cityName.textContent = arg;

      let dataQuan = data.list; //for loop cant read data.list so have to store it into a variable first
      let j = 0;
      for (let i = 0; i < dataQuan.length; i = i + 8) {
        dateDisplay[j].textContent = dataQuan[i].dt_txt;
        icon[j].src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
        temp[j].textContent = Math.round(data.list[i].main.temp - 273.15) + "C";
        humidity[j].textContent =
          "humidity: " + data.list[i].main.humidity + "%";
        wind[j].textContent = "wind: " + data.list[i].wind.speed + " mph";
        j = j + 1;
      }

      //storing data into localStorage
      const locationName = arg;
      let submissionObj = {
        locationName,
      };
      const stringifiedObj = JSON.stringify(submissionObj);
      localStorage.setItem(locationName, stringifiedObj);

      // making a new button if city can be successfully located
      let historyBtn = document.createElement("button");
      historyBtn.innerHTML = arg;
      historyBtn.classList.add("historyBtnStyle"); //used for css to style
      container.appendChild(historyBtn);
      //when clicking new button it accesses local storage to find value
      historyBtn.addEventListener("click", function () {
        let unstring = JSON.parse(stringifiedObj); //stringify the object to make it JSON readable

        search(unstring.locationName);
      });
    });
}

searchBtn.addEventListener("click", newSearch);
