import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <div className="cards">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <h1>{movie.name}</h1>
            <p>Ratings: {movie.ratings}</p>
            <p>Release Date: {movie.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
