import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { makeStyles, Button } from '@material-ui/core';

import SectionItem from '../assets/themeComponets/SectionItem';

const useStyles = makeStyles((theme) =>({
  movieCard:{
    borderRadius: '5px',
    position: 'relative',
    margin: '5px',
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  buttonDesign: {
    background: theme.status.alert,
    color: theme.status.dark,
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 14,
  },

  linkClass: {
    textDecoration: 'none',
  },

  fontStoryline: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 12,
  },

  fontTitle: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 18,
    position: 'absolute',
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: '100%',
    margin: 0,
    padding: '5px 0',
    color: 'white',
  },
  
}))

function MovieCard ({title, image, id}) {
  const classes = useStyles();

  const {deleteMovie} = useContext(Context);

    return (
      <SectionItem data-testid="movie-card" className={classes.movieCard} sm={5}>
        <img src={image} alt="Movies poster" style={{ width: 'inherit', borderRadius: '5px' }} />
        <h3 className={classes.fontTitle}>{title}</h3>
        <SectionItem 
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Link to={`/movies/${id}`} className={classes.linkClass}>
            <Button className={classes.buttonDesign}>
            Detalhes do filme
            </Button>
          </Link>
          <Button className={classes.buttonDesign} type="button" onClick={()=>{deleteMovie(id)}}>Deletar cartão</Button>
        </SectionItem>
      </SectionItem>
    );
}

export default MovieCard;
