var apiKey = "6c954c4894d6ffe51fdd55233b4b58b5";
var lat = ""; // replace with desired latitude
var lon = ""; // replace with desired longitude
// fetch(api, {mode: 'no-cors'})
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`, {
  mode: 'cors'
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });



// Get latitude and longitude from zip code
var longlatUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${lat},${lon}&appid=${apiKey}`;

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
    var weatherUrl = `https://bulk.openweathermap.org/archive/{BULK_FILE_NAME}?appid={API key}`;
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

};

//   fetch(`/search?q=${encodeURIComponent(input)}`)
//     .then(response => response.json())
//     .then(data => {
//       // Process the search results and display them to the user
//     })
//     .catch(error => {
//       console.error('Error performing search:', error);
//     });
// }

// var searchUrl = `https://openweathermap.org`;
// fetch(searchUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Process the search results and display them to the user
//   })
//   .catch(error => {
//     console.error('Error performing search:', error);
//   })