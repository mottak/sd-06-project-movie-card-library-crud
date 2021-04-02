import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

function MovieDetails({match}) {
    const { id } = match.params;
    const { movieDetails, setMovieDetails } = useContext(Context);
    useEffect(() => {
      const getMovieDetail = async () => {
        const details = await movieAPI.getMovie(id);
        setMovieDetails(details);
        console.log(details);

      }
      getMovieDetail()
    }, []);
    return (
      <div data-testid="movie-details">
        detalhes
        <img alt="Movie Cover" src={`../${movieDetails.imagePath}`} />
        <p>{`Subtitle: ${movieDetails.subtitle}`}</p>
        <p>{`Storyline: ${movieDetails.storyline}`}</p>
        <p>{`Genre: ${movieDetails.genre}`}</p>
        <p>{`Rating: ${movieDetails.rating}`}</p>
        <Link to={`/movies/${id}/edit`}>
          <button type="button">
            Editar Filme
          </button>
        </Link>
      </div>
    );
  
}

export default MovieDetails;
