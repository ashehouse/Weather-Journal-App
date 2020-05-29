/* Global Variables */

let url = "api.openweathermap.org/data/2.5/weather?zip=";
let apiKey = "&appid=ee95c3022f1d9a663f173d79e3606653";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

 
const postData = async ('/localApi', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log('error', error);
    }
}

