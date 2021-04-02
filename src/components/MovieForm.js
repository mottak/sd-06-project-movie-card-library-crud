import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'
import PropTypes from 'prop-types';

function MovieForm ({id}) {
  const genreArray = ['Ação', 'Comédia', 'Suspense', 'Fantasia'];
  const {editedMovie, setEditedMovie, handleFormSubmit} = useContext(Context);
  const [isDisable, setIsDisable] = useState(false);
 
    return (
      <div>
        <label htmlFor="movie_title">
        Título
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
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
          onChange={({target}) => setEditedMovie({...editedMovie, subtitle: target.value })}
        />
        </label>
     
        <label htmlFor="movie_image">
          Imagem
         <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          onChange={({target}) => setEditedMovie({...editedMovie, imagePath: target.value })}
        />
        </label>
        <label htmlFor="movie_storyline">
        Sinopse
        <textarea
     
          id="movie_storyline"
          type="text"
          className="validate"
          onChange={({target}) => setEditedMovie({...editedMovie, storyline: target.value })}
        />
        </label>
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          onChange={({target}) => setEditedMovie({...editedMovie, genre: target.value })}
        >
          {genreArray.map(e =>(
            <option key={e}>{e}</option>
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
          onChange={({target}) => setEditedMovie({...editedMovie, rating: target.value })}
        />
       </label>
       <div>
         <Link to="/">
        <button
         type="button"
          onClick={handleFormSubmit(id)}
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
