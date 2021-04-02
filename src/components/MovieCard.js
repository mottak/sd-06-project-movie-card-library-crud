import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard ({title, image, storyline, id}) {

    return (
      <div data-testid="movie-card">
        <img src={image} alt="Movies poster" />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Detalhes do filme</Link>
      </div>
    );
}

export default MovieCard;
