import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

function MovieForm ({id, movieInfo, handleFormSubmit}) {
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
      <div>
        <label htmlFor="movie_title">
        Título
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={editedMovie.title}
          onChange={({target}) => setEditedMovie({...editedMovie, title: target.value })}
        />
        </label>
        <label htmlFor="movie_subtitle">
        Subtítulo
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="validate"
          value={editedMovie.subtitle}
          onChange={({target}) => setEditedMovie({...editedMovie, subtitle: target.value })}
        />
        </label>
     
        <label htmlFor="movie_image">
          Imagem
         <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={editedMovie.imagePath}
          onChange={({target}) => setEditedMovie({...editedMovie, imagePath: target.value })}
        />
        </label>
        <label htmlFor="movie_storyline">
        Sinopse
        <textarea
     
          id="movie_storyline"
          type="text"
          className="validate"
          value={editedMovie.storyline}
          onChange={({target}) => setEditedMovie({...editedMovie, storyline: target.value })}
        />
        </label>
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          value={editedMovie.genre}
          onChange={({target}) => setEditedMovie({...editedMovie, genre: target.value })}
        >
          {genreArray.map(e =>(
            <option key={e} value={e}>{e}</option>
          ))}
          </select>
          <label htmlFor="movie_rating">Avaliação
          <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={editedMovie.rating}
          onChange={({target}) => setEditedMovie({...editedMovie, rating: target.value })}
        />
       </label>
       <div>
         <Link to="/">
        <button
          type="button"
          onClick={(event) => handleFormSubmit(id, event)}
          disabled={isDisable}
        >
          Submit
        </button>
        </Link>
      </div>
      </div>
    );

}

export default MovieForm;
