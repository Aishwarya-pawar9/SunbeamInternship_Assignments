document.getElementById('getWeather').addEventListener('click', function() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    if (!latitude || !longitude) {
        alert('Please enter both latitude and longitude.');
        return;
    }

    const apiKey = 'd3755f26b2msh4fe894942c52172p19b342jsnb80f150916b4'; 
    const apiUrl = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lat=${latitude}&lon=${longitude}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const weather = data.data[0];
        const weatherHtml = `
            <h5>Weather in ${weather.city_name}, ${weather.country_code}</h5>
            <p>Temperature: ${weather.temp} °C</p>
            <p>Description: ${weather.weather.description}</p>
            <p>Humidity: ${weather.rh}%</p>
            <p>Wind Speed: ${weather.wind_spd} m/s</p>
        `;
        document.getElementById('weatherResult').innerHTML = weatherHtml;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
    });
});

/*
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=metric&lang=en');
xhr.setRequestHeader('x-rapidapi-key', 'd3755f26b2msh4fe894942c52172p19b342jsnb80f150916b4');
xhr.setRequestHeader('x-rapidapi-host', 'weatherbit-v1-mashape.p.rapidapi.com');

xhr.send(data);

*/
