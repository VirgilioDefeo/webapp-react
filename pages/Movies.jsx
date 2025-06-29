import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.error("errore", err))
    }, [])



    return (
        <div className="container mt-4">
            <h2>Lista dei film</h2>
            <div className="row">
                    {movies.map(movie => (
                        <div key={movie.id} className="col-md-4 mb-3">
                            <div className="card">
                                {movie.poster && <img src={movie.poster} className="card-img-top" alt={movie.title} />}
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                    </h5>
                                    <p className="card-text">Anno: {movie.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
               
            </div>
        </div>
    )
}

export default Movies