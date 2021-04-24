import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import { ImageDetails, MovieDescription } from '.';
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';
import Loading from './Loading';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  buttonDesign: {
    background: theme.status.alert,
    color: theme.status.dark,
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 14
  },
  linkClass: {
    textDecoration: 'none'
  }
}))

function Details({ id, isLoading }) {
  const classes = useStyles();
  const { deleteMovie } = useContext(Context);
  return (
    <div>
      {isLoading
        ? (<Loading />)
        : (
          <Section>
            <SectionItem sm={6}>
              <MovieDescription />
            </SectionItem>
            <SectionItem sm={6}>
              <ImageDetails />
            </SectionItem>

            <Link to={`/movies/${id}/edit`} className={classes.linkClass}>
              <Button type="button" className={classes.buttonDesign}>
                Editar Filme
              </Button>
            </Link>
            <Link to="/" className={classes.linkClass}>
              <Button className={classes.buttonDesign} type="button" onClick={()=>{deleteMovie(id)}}>Deletar cartão</Button>
            </Link>
           
          </Section>
        )}

    </div>
  );
}

export default Details;
