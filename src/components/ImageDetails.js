import React, { useContext } from 'react';
import Context from '../Context/Context';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  imageDesign: {
    display: 'flex',
    margin: 'auto'
  }
 
})

function ImageDetails() {
  const classes = useStyles();

  const { movieDetails } = useContext(Context);

  console.log(movieDetails, 'movie details')
  if (!movieDetails || !movieDetails.imagePath) return <>... </>;
  return (
    <div className={classes.imageDesign} >
        <img src={movieDetails.imagePath.match(/^https/i)? movieDetails.imagePath : `../${movieDetails.imagePath}` } alt=""/>
    </div>
     
  );
}

export default ImageDetails;
