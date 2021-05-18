import React, { useContext } from 'react';
import Context from '../Context/Context';
import SectionItem from '../assets/themeComponets/SectionItem';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fontStoryline: {
    fontFamily: ['Arial', 'sans-serif'],
    fontSize: 16,
    fontWeight: 600
  },
 
})

function MovieDescription() {
  const classes = useStyles();
  const { movieDetails } = useContext(Context);
  if (!movieDetails) return <>... </>;

  return (
    <SectionItem className={classes.fontStoryline}>
      <p>{`Subtitle: ${movieDetails.subtitle}`}</p>
      <p>{`Storyline: ${movieDetails.storyline}`}</p>
      <p>{`Genre: ${movieDetails.genre}`}</p>
      <p>{`Rating: ${movieDetails.rating}`}</p>
    </SectionItem>
  );
}

export default MovieDescription;
