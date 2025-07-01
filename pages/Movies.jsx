import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../pages/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3000/movies").then(res => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Lista dei film</h2>
      <div className="d-flex flex-wrap">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
