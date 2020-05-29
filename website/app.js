/* Global Variables */

const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "&appid=ee95c3022f1d9a663f173d79e3606653";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let zip;
let mood;
let apiUrl;

// get zip from user
let submitBtn = document.getElementById('generate');
submitBtn.addEventListener('click', event => {
    zip = document.getElementById('zip').value;
    mood = document.getElementById('feelings').value;
    document.getElementById('date').textContent = newDate;
    apiUrl = `${url}zip=${zip}&units=imperial${apiKey}`;//variable to hold data source url
    document.getElementById('content').textContent = `Feeling: ${mood}`;
    if (zip) {
        getWeather();
    } else {
        console.log('error');
    };
})

async function getWeather() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { weather, name: city, main: {temp} } = data;
    const { icon, description } = weather[0];
    document.getElementById('temp').textContent = `Temperature: ${temp}°`;
    const root = document.getElementById('entryHolder');
    const iconArea = document.createElement('div');
    const iconLink = `http://openweathermap.org/img/wn/${icon}2x.png`;
    
    root.append(iconArea);

    iconArea.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;

    
    console.log(city, temp, icon, description);
}





