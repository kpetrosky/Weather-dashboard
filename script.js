let apiKey = "6c954c4894d6ffe51fdd55233b4b58b5";
let zipCode = "12345"; // replace with desired zip code
let countryCode = "us"; // replace with desired country code

// Get latitude and longitude from zip code
var longlatUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;

fetch(longlatUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Get latitude and longitude from response
    let lat = data[0].lat;
    let lon = data[0].lon;

    // Get weather data using latitude and longitude
    let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
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
