import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';

function MovieCard ({title, image, storyline, id}) {
  const {deleteMovie} = useContext(Context);

 
    return (
      <div data-testid="movie-card">
        <img src={image} alt="Movies poster" />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Detalhes do filme</Link>
        <button type="button" onClick={()=>{deleteMovie(id)}}>Deletar cartão</button>
      </div>
    );
}

export default MovieCard;
