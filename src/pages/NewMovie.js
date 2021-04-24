import React, { useContext} from 'react';
import Context from '../Context/Context'
import { MovieForm, Header } from '../components';
import * as movieAPI from '../services/movieAPI';

function NewMovie() {
  const { moviesList, setMovieList, editedMovie, setEditedMovie } = useContext(Context);

  const indexId = moviesList.length;

  const handleFormSubmit = async (id) => {
    setEditedMovie({...editedMovie, id})
    setMovieList([...moviesList, editedMovie]);
    setEditedMovie({})
    await movieAPI.createMovie(editedMovie);
  }

    return (

      <div data-testid="new-movie">
        <Header title="Crie um novo Cartão de Filme" />
        <MovieForm id={indexId} handleFormSubmit={handleFormSubmit} />
      </div>
    );

}
export default NewMovie;
