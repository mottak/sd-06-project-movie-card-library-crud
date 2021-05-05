import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
// import PropTypes from 'prop-types';
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';
import { makeStyles, Button, TextField, MenuItem } from '@material-ui/core';

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
  SectionItemDesign: {
    padding: '6px 0 6px'
  }
}))

function MovieForm ({id, movieInfo, handleFormSubmit}) {
  const classes = useStyles();
  const genreArray = ['Ação', 'Comédia', 'Suspense', 'Fantasia'];
  const {editedMovie, setEditedMovie, setMovieList, moviesList} = useContext(Context);
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    console.log('edited', editedMovie)
    if(movieInfo){
      setEditedMovie({...movieInfo})
    }
  }, [])
 
    return (
      <Section
        direction="column"
        justify="space-between"
        alignItems="center"
        style={{padding: "30px 0"}}
      >
        
        <form>
          <SectionItem className={classes.SectionItemDesign}>
            <TextField
              placeholder="Insira o título"
              id="movie_title"
              label="Título"
              type="text"
              className="validate"
              value={editedMovie.title}
              onChange={({target}) => setEditedMovie({...editedMovie, title: target.value })}
              variant="outlined"
            />
          </SectionItem>
        
          <SectionItem className={classes.SectionItemDesign}>
            <TextField
              placeholder="Insira o subtítulo"
              id="movie_subtitle"
              label="Subtítulo"
              type="text"
              className="validate"
              value={editedMovie.subtitle}
              onChange={({target}) => setEditedMovie({...editedMovie, subtitle: target.value })}
              variant="outlined"
            /> 
          </SectionItem>
       
          <SectionItem className={classes.SectionItemDesign}>
            <TextField
              placeholder="Insira o caminho da imagem"
              id="movie_image"
              label="Imagem"
              type="text"
              value={editedMovie.imagePath}
              onChange={({target}) => setEditedMovie({...editedMovie, imagePath: target.value })}
              variant="outlined"
            />
          </SectionItem>

          <SectionItem className={classes.SectionItemDesign}>
            <TextField
              id="movie_storyline"
              label="Sinopse"
              type="text"
              className="validate"
              value={editedMovie.storyline}
              onChange={({target}) => setEditedMovie({...editedMovie, storyline: target.value })}
              variant="outlined"
            />
          </SectionItem>

          <SectionItem className={classes.SectionItemDesign}>
            <TextField
              id="movie_genre"
              select
              label="Gênero"
              value={editedMovie.genre}
              onChange={({target}) => setEditedMovie({...editedMovie, genre: target.value })}
              variant="outlined"
              style={ { width: '100%' } }
            >
              {genreArray.map(e =>(
                <MenuItem key={e} value={e}>{e}</MenuItem>
              ))}
            </TextField>
          </SectionItem>

          <SectionItem className={classes.SectionItemDesign}>
            <TextField
              placeholder="Dê a avaliação do filme"
              id="movie_rating"
              label="Avaliação"
              type="number"
              step={0.1}
              min={0}
              max={5}
              value={editedMovie.rating}
              onChange={({target}) => setEditedMovie({...editedMovie, rating: target.value })}
              variant="outlined"
            />
          </SectionItem>
        
          <SectionItem className={classes.SectionItemDesign}>
            <Link to="/" className={classes.linkClass}>
              <Button
                type="button"
                onClick={(event) => handleFormSubmit(id, event)}
                disabled={isDisable}
                className={classes.buttonDesign}
              >
                Submit
              </Button>
            </Link >
          </SectionItem>
 
      </form>
      </Section>
    );

}

export default MovieForm;
