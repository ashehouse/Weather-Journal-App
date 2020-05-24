// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Add Get Route 
app.get('/all', (req, res) => {
    res.send(projectData);
})

// Add Post Route
app.post('/add', (req, res) => {
    let data = req.body;
    projectData.temperature = data.temperature;
    projectData.date = data.date;
    projectData.userResponse = data.userResponse;
    res.send(projectData);
})

// Add Post Route for adding incoming data to projectData



function addTemperature (req, res) {
    data.push(req.body);
}

// Setup Server
const port = 8080;
const server = app.listen(port, () => {
    console.log('server running');
    console.log(`running on localhost: ${port}`)
});

