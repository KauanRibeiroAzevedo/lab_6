
// create.js

import { useState } from "react";
import axios from 'axios';

// Component used to create and submit a new movie.
function Create() {

  // Stores the movie details entered by the user.
  const [title, setTitle] = useState('');
  const[ year, setYear] = useState('');
  const[poster, setPoster] = useState('');
  
  // Handles the form submission when the user adds a movie.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,year,poster);

    // Creates an object containing the movie information.
    const movie = {
      title: title,
      year: year,
      poster: poster
    }

    // Sends the movie data to the backend server using Axios.
    axios.post('http://localhost:4000/api/movies',movie)
    .then((res)=>{console.log(res.data)})
    .catch((error)=>{console.log(error)});

  }

  // Displays the form used to enter and submit movie details.
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>
         <div className="form-group">
          <label>Add Movie Year: </label>
          <textarea type="text"
            className="form-control" 
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Makes the Create component available to other files.
export default Create;
