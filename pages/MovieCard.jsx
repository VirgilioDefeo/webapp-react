
import { Link } from "react-router-dom";


function MovieCard({ movie }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      {movie.poster && (
 <img src={movie.poster} className="card-img-top" alt={movie.title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Anno: {movie.year}</p>
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">Dettagli</Link>
      </div>
    </div>
  );
}

export default MovieCard;
