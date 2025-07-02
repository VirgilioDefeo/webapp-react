
import { Link } from "react-router-dom";


function MovieCard({ movie }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem", margin: "1rem" }}>
      {movie.poster && (
 <img src={movie.poster} className="card-img-top" alt={movie.title} 
 style={{ height: "400px", objectFit: "cover"}}/>
      )}
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">Anno: {movie.year}</p>
        <Link to={`/movies/${movie.slug}`} className="btn btn-primary">Dettagli</Link>
      </div>
    </div>
  );
}

export default MovieCard;
