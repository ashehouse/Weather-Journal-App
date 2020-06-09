// 1. Setup empty JS object to act as endpoint for all routes
let projectData = {};

// 2. Express to run server and routes
const express = require('express');

// 3. Start up an instance of app
const app = express();

/* 4. Dependencies */
const bodyParser = require('body-parser');

/* 5. Middleware*/
// 6. Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 7. Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// 8. Initialize the main project folder
app.use(express.static('website'));
app.use(express.json());

// 9. Set up the server
const port = 8080;

// 10. Callback to debug
const server = app.listen(port, () => {
    console.log('server running');
    console.log(`running on localhost: ${port}`)
});

// 11. Initialize all routes with a callback function



// 13. Post Route
app.post('/api', (req, res) => {
    res.send('weather data received');
    projectData = req.body;
    console.log(projectData);
});

// 12. Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
})










