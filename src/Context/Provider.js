import React, {useState} from 'react';
import Context from './Context';

function Provider({ children }) {
  const [moviesList, setMovieList] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [editedMovie, setEditedMovie] = useState({});

  const contextValue = {
    moviesList,
    setMovieList,
    movieDetails,
    setMovieDetails,
    editedMovie,
    setEditedMovie,
  }
  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );

}

export default Provider;