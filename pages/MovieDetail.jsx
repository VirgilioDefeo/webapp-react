import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const MovieDetail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then(res => setMovie(res.data))
        .catch(err => console.error((err)))
    }, [id])

    if(!movie) return <p>caricamento..</p>

    return (
         <div className="container mt-4">
      <h2>{movie.title}</h2>
      {movie.poster && (
        <img
          src={movie.poster}
          alt={movie.title}
          className="img-fluid mb-3"
        />
      )}
      <p><strong>Anno:</strong> {movie.year}</p>

      <h4>Recensioni:</h4>
      {movie.reviews && movie.reviews.length > 0 ? (
        <ul>
          {movie.reviews.map((review, index) => (
            <li key={index}><strong>{review.name}</strong> ({review.vote}/5): {review.text}</li>
          ))}
        </ul>
      ) : (
        <p>Nessuna recensione.</p>
      )}
    </div>
    )
}

export default MovieDetail
