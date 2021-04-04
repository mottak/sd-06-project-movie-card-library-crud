import React, {useState} from 'react';
import Context from './Context';
import * as movieAPI from '../services/movieAPI';

function Provider({ children }) {
  const [moviesList, setMovieList] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [editedMovie, setEditedMovie] = useState({});

  const deleteMovie = async (id) => {
    await movieAPI.deleteMovie(id);
    const newMovieList = moviesList.filter(e => e.id !== Number(id));
    console.log()
    setMovieList(newMovieList);
  }
 
  const contextValue = {
    moviesList,
    setMovieList,
    movieDetails,
    setMovieDetails,
    editedMovie,
    setEditedMovie,
    deleteMovie,
  }
  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );

}

export default Provider;