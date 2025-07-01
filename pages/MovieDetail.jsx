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
            {movie.poster && <img src={movie.poster} alt={movie.title} className="img-fluid" />}
            <p>Anno:{movie.year}</p>
                <h3>Recensioni</h3>
           {movie.reviews && (
  <ul>
    {movie.reviews.map((r, i) => (
      <li key={i}>{r.comment}</li>
    ))}
  </ul>
)}

            
        </div>
    )
}

export default MovieDetail
