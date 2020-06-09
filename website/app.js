// Global Variables
const generateBtn = document.getElementById('generate')
let apiUrl;
let mood;

// URL For Weather Data
const url = "https://api.openweathermap.org/data/2.5/weather?zip=";
const submitBtn = document.getElementById('generate');


// 1. Personal API Key for OpenWeatherMap API
const apiKey = "&appid=ee95c3022f1d9a663f173d79e3606653";


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 + '.'+ d.getDate()+'.'+ d.getFullYear();

/* Function called by event listener */
const generateUserData = () => {
    const zip = document.getElementById('zip').value;
    mood = document.getElementById('feelings').value;
    apiUrl = `${url}${zip}&units=imperial${apiKey}`;

    getWeather(apiUrl)
    .then(function(data) {
        postData('/api', {"date": newDate, "temperature": data.main.temp, "location": data.name, "mood": mood,})
        // .then(data => console.log(data))
        // .finally(getProjectData().then(data => console.log(data)));
        .then(getProjectData());
    })
    
};

// Event listener to add function to existing HTML DOM element
generateBtn.addEventListener('click', generateUserData);


/* Function to GET Web API Data*/
const getWeather = async (apiUrl) => {
    const response = await fetch(apiUrl);
    try {
    const data = await response.json();
    return data;
    } catch(error) {
        console.log('error', error);
    };
}

/* Function to POST data */
const postData = async (url ='', data) => {
    let response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        let newData = await response.text();
        // console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};



/* Function to GET Project Data */
const getProjectData = async () => {
    const response = await fetch('/all');
    let data = await response.json();
    document.getElementById('date').textContent = `Date: ${data.date}`;
    document.getElementById('content').textContent = `Location: ${data.location} Mood: ${data.mood}`;
    document.getElementById('temp').textContent = `Temperature: ${data.temperature}`;
    return data;
};
