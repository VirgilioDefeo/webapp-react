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
            <p>Anno:{movie.year}</p>
            {movie.poster && <img src={movie.poster} alt={movie.title} style={{maxWidth: "300px"}}></img>}
        </div>
    )
}

export default MovieDetail
