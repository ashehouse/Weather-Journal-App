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
    apiUrl = `${url}zip=${zip}&units=imperial${apiKey}`;//variable to hold data source url
    if (zip) {
        getWeather();
    } else {
        console.log('error');
    };
  
    




    // async function getISS() {
    //     const response = await fetch(api_url);
    //     const data = await response.json();
    //     const { latitude, longitude } = data;
})

async function getWeather() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // const { name, weather } = data;
    const {weather, name: city, main: {temp}} = data;
    // const icon = weather[0].icon; 
    // const description = weather[0].description;
    const { icon, description } = weather[0];
    console.log(city, temp, icon, description);
    
    
}





