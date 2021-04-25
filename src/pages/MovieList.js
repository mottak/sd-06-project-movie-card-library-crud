import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { Loading, MovieCard, Header } from '../components';
import { Button, makeStyles } from '@material-ui/core';

import * as movieAPI from '../services/movieAPI';

const useStyles = makeStyles((theme)=>({
  buttonDesign: {
    background: theme.status.alert,
    color: theme.status.dark,
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 14
  },
  linkClass: {
    textDecoration: 'none'
  },
 
}))

function MovieList () {
  const classes = useStyles();

  const { moviesList, setMovieList } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieList = async () => {
      const movies = await movieAPI.getMovies();
      setMovieList(movies);
      setIsLoading(false);
    };
    getMovieList();
  }, []);
    
  return (

      <div data-testid="movie-list">
        <Header />
        {isLoading || !moviesList || moviesList.length === 0 
          ? <Loading /> 
          : <div>
          {moviesList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          id={movie.id}
          storyline={movie.storyline}
          image={movie.imagePath}
        />
        ))}
        <Link to="/movies/new" className={classes.linkClass}>
        <Button className={classes.buttonDesign}>
        Adicionar Cartão
        </Button>
      </Link>
      </div>
          }
      </div>
    );
  
}

export default MovieList;
