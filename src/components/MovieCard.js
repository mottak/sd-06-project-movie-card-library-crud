import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  movieCard:{
    margin: '3px #000000',
  },
  buttonDesign: {
    background: theme.status.alert,
    color: theme.status.dark,
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 14
  },
  linkClass: {
    textDecoration: 'none'
  },
  fontStoryline: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 12,
  },
  fontTitle: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 18,
  }
}))

function MovieCard ({title, image, storyline, id}) {
  const classes = useStyles();

  const {deleteMovie} = useContext(Context);

    return (
      <div data-testid="movie-card" className={classes.movieCard}>
        <img src={image} alt="Movies poster" />
        <h3 className={classes.fontTitle}>{title}</h3>
        <p className={classes.fontStoryline}>{storyline}</p>
        <Link to={`/movies/${id}`} className={classes.linkClass}>
          <Button className={classes.buttonDesign}>
          Detalhes do filme
          </Button>
         </Link>
        <Button className={classes.buttonDesign} type="button" onClick={()=>{deleteMovie(id)}}>Deletar cartão</Button>
      </div>
    );
}

export default MovieCard;
