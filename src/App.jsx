import { Routes, Route,  Link} from "react-router-dom";import Home from "../pages/Home"
import Movies from "../pages/Movies"
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound"

function App() {
  return (
    
     <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link className="navbar-brand " to="/">MovieApp</Link>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
<Link to="/movies" className='p-2' style={{ color: 'white' }}>Film</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:slug" element={<MovieDetail />} />
                <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
