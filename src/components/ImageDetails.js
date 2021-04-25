import React, { useContext } from 'react';
import Context from '../Context/Context';

function ImageDetails() {
  
  const { movieDetails } = useContext(Context);
  console.log(movieDetails, 'movie details')
  if (!movieDetails || !movieDetails.imagePath) return <>... </>;
  return (
      <div>
         <img src={movieDetails.imagePath.match(/^https/i)? movieDetails.imagePath : `../${movieDetails.imagePath}` } alt=""/>
      </div>
     
  );
}

export default ImageDetails;
