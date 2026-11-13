
const express = require('express'); // Imports Express to create the backend server.
const app = express() // Creates an Express application.
const port = 4000 // Sets the port number where the server will run.
const cors = require('cors'); // Imports CORS to allow communication between different origins.
app.use(cors()); // Enables CORS for all routes.

// Imports body-parser to read data sent in HTTP requests.
const bodyParser = require('body-parser');

// Allows the server to read URL-encoded data submitted through forms.
app.use(bodyParser.urlencoded({ extended: true }));

// Allows the server to read JSON data sent in requests.
app.use(bodyParser.json());

// Middleware that sets HTTP headers to control cross-origin requests.
app.use(function(req, res, next) {
  // Allows requests from any origin.
  res.header("Access-Control-Allow-Origin", "*");

  // Specifies which HTTP methods are allowed.
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  // Specifies which headers can be included in requests.
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Moves the request to the next middleware or route.
  next();
});

// POST route used to receive new movie information from the client.
app.post('api/movies',(res, req)=>{
// Displays the data received in the server console.
console.log(req.body);

// Sends a response containing the movie title.
res.send("Movies Added:", req.body.title);
})

// GET route for the main homepage of the server.
app.get('/', (req, res) => {
  // Sends a simple message when someone accesses the homepage.
  res.send('Hello World!')
})

// GET route that returns a list of movies to the client.
app.get('/api/movies',(req, res)=>{

    // Creates an array containing movie information.
    const movies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk5OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }

    ];

    // Sends the movie array back to the client in JSON format.
    res.json({movies})
})

// Starts the Express server and listens for incoming requests.
app.listen(port, () => {
  // Displays a message in the console confirming that the server is running.
  console.log(`Example app listening on port ${port}`)
})
