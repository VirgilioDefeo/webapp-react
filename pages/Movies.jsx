import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../pages/MovieCard";
import e from "cors";

function Movies() {
  const [movies, setMovies] = useState([]);
     const [search, setSearch] = useState("")
     const [loading, setLoading] = useState(true)

    useEffect(() => {
    axios.get("http://localhost:3000/movies").then(res => {
      setMovies(res.data);
      setLoading(false)
    });
  }, []);

  const filteredMovies = movies.filter((movie) => 
movie.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="container mt-4">
      <h2>Lista dei film</h2>
      <input type="text"
      className="form-control mb-4"
      placeholder="Cerca un film.."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap justify-content-center">
            {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Nessun film trovato.</p>
        )}

      </div>
    </div>
  );
}

export default Movies;
