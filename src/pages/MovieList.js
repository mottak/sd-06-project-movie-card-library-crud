import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { Loading, MovieCard, Header } from '../components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';
import * as movieAPI from '../services/movieAPI';


// colocar estilo nos botões de prev e next
// colocar padding entre os cartões de filmes
// centralizar botão de criar card

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
  movieListDesign: {
    margin: 'auto',
    justifyContent: 'center',
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
    // eslint-disable-next-line
  }, []);
    
  return (

      <Section
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Header />
        {isLoading || !moviesList || moviesList.length === 0 
          ? <Loading /> 
          : <Section className={classes.movieListDesign}>
              {moviesList.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  image={movie.imagePath}
                />
            ))}
            </Section>       
        }
        <SectionItem style={{ alignSelf: 'center' }}>
          <Link to="/movies/new" className={classes.linkClass}>
            <Button className={classes.buttonDesign}>
              Adicionar Cartão
            </Button>
          </Link>
        </SectionItem>
      </Section>
    );
  
}

export default MovieList;
