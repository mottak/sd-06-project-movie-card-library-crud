import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

function MovieList () {
  const { moviesList, setMovieList } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const getMovieList = async ()=> {
      const movies = await movieAPI.getMovies();
      console.log(movies)
      setMovieList(movies);
      setIsLoading(false);
    };
    getMovieList();
  }, []);
  
  return (
      <div data-testid="movie-list">
        {isLoading ? <Loading /> :
        moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          id={movie.id}
          storyline={movie.storyline}
          image={movie.imagePath}
        />))}
        <Link to="/movies/new">Adicionar Cartão</Link>
        
      </div>
    );
  
}

export default MovieList;
