import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { Loading, MovieCard, Header } from '../components';
import { Button, makeStyles } from '@material-ui/core';

import * as movieAPI from '../services/movieAPI';

const useStyles = makeStyles({
  buttonDesign: {
    background: '#fbc02d',
    color: '#000000',
  },
  linkClass: {
    textDecoration: 'none'
  }
})

function MovieList () {
  const classes = useStyles();

  const { moviesList, setMovieList } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieList = async ()=> {
      const movies = await movieAPI.getMovies();
      setMovieList(movies);
      setIsLoading(false);
    };
    getMovieList();
  }, []);
  
  return (

      <div data-testid="movie-list" className={classes.movieList}>
        <Header />
        {isLoading ? <Loading /> :
        moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          id={movie.id}
          storyline={movie.storyline}
          image={movie.imagePath}
        />))}
        <Link to="/movies/new" className={classes.linkClass}>
          <Button className={classes.buttonDesign}>
          Adicionar Cartão
          </Button>
        </Link>
      </div>
    );
  
}

export default MovieList;
