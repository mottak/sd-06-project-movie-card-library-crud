import React, {useContext} from 'react';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieList from '../pages/MovieList';

function MovieCard ({title, image, storyline, id}) {
  const {moviesList, setMovieList} = useContext(Context);

  const deleteMovie = (id) => {
    movieAPI.deleteMovie(id);
    const newMovieList = moviesList.filter(e => e.id !== id);
    setMovieList(newMovieList);

  }

    return (
      <div data-testid="movie-card">
        <img src={image} alt="Movies poster" />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Detalhes do filme</Link>
        <button type="button" onClick={deleteMovie}>Deletar cartão</button>
      </div>
    );
}

export default MovieCard;
