var apiKey = "30286bdb0d1bd12bbf351dc0bda01e86";
var zipCode = "85745"; // replace with desired zip code
var countryCode = "us"; // replace with desired country code
// fetch(api, {mode: 'no-cors'})
fetch('https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}', {
  mode: 'no-cors'
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });


// Get latitude and longitude from zip code
var longlatUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

fetch(longlatUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Get latitude and longitude from response
    var lat = data.lat;
    var lon = data.lon;

    // Get weather data using latitude and longitude
    var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return fetch(weatherUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Do something with the response data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



var form = document.querySelector("#search-form");

// form.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  var input = document.querySelector("#search-input");
  var searchQuery = input.value;
  // Do something with the search query
}
function handleSearch(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page



  fetch(`/search?q=${encodeURIComponent(input)}`)
    .then(response => response.json())
    .then(data => {
      // Process the search results and display them to the user
    })
    .catch(error => {
      console.error('Error performing search:', error);
    });
}

var searchUrl = `https://openweathermap.org`;
fetch(searchUrl)
  .then(response => response.json())
  .then(data => {
    // Process the search results and display them to the user
  })
  .catch(error => {
    console.error('Error performing search:', error);
  });
