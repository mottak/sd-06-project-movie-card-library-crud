import React, { useContext } from 'react';
import Context from '../Context/Context';

function MovieDescription() {
  const { movieDetails } = useContext(Context);
  if (!movieDetails) return <>... </>;

  return (
    <div>
      <p>{`Subtitle: ${movieDetails.subtitle}`}</p>
      <p>{`Storyline: ${movieDetails.storyline}`}</p>
      <p>{`Genre: ${movieDetails.genre}`}</p>
      <p>{`Rating: ${movieDetails.rating}`}</p>
    </div>
  );
}

export default MovieDescription;
