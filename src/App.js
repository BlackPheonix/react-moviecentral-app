import  { useState, useEffect }  from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=6dd0cf6d';

const movie1 = {
  Poster: "N/A",
  Title: "Italian Spiderman",
  Type: "movie",
  Year: "2007",
  imdbID: "tt2705436"
}


function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {

    searchMovies('batman')

  }, [])


  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }



  return (
    <div className="app">
      <h1>MovieCentral</h1>
      
      <div className="search">
        <input 
          value= {searchTerm}
          onChange = {(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
       />

       <img 
        src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)}
      />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie = {movie} />

        ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
            
          </div>
        )}

    </div>
  );
}

export default App;
