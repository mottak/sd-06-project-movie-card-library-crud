import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

function MovieDetails({match}) {
    const { id } = match.params;
    const { movieDetails, setMovieDetails, deleteMovie } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const getMovieDetail = async () => {
        const details = await movieAPI.getMovie(id);
        setMovieDetails(details);
        setIsLoading(false);
      }
      getMovieDetail();
    }, []);

    return (
      <div data-testid="movie-details">
        detalhes
      {isLoading 
        ? <Loading /> 
        : <div>  
        <img alt="Movie Cover" src={ movieDetails.imagePath.match(/^https/i) 
          ? movieDetails.imagePath 
          : `../${movieDetails.imagePath}`} />
        <p>{`Subtitle: ${movieDetails.subtitle}`}</p>
        <p>{`Storyline: ${movieDetails.storyline}`}</p>
        <p>{`Genre: ${movieDetails.genre}`}</p>
        <p>{`Rating: ${movieDetails.rating}`}</p>
        <Link to={`/movies/${id}/edit`}>
          <button type="button">
            Editar Filme
          </button>
        </Link>
        <button type="button" onClick={()=>{deleteMovie(id)}}>Deletar cartão</button>
      </div>
    }
    </div>
    );
  
}

export default MovieDetails;
