import React, {useState} from 'react';
import Context from './Context';

function Provider({ children }) {
  const [moviesList, setMovieList] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [editedMovie, setEditedMovie] = useState({});
  
  const handleFormSubmit = (id) =>{
    moviesList.map(e => {
      if(e.id === id){
        setMovieList({...moviesList, editedMovie})
      }
     });
  }

  const contextValue = {
    moviesList,
    setMovieList,
    movieDetails,
    setMovieDetails,
    editedMovie,
    setEditedMovie,
    handleFormSubmit,
  }
  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );

}

export default Provider;