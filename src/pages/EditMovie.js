import React, { useEffect, useState, useContext } from 'react';
import Context from '../Context/Context';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

function EditMovie({match}){
  const { id } = match.params;
  const { moviesList, setMovieList, editedMovie, setEditedMovie } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const getMovieToEdit = async () => {
      const movie = await movieAPI.getMovie(Number(id));
      console.log(movie)
      setMovieInfo(movie);
      setIsLoading(false);
    };
    getMovieToEdit();
  }, []);

    const handleFormSubmit = async(id, event) => {
      const newMovieList = moviesList.map(movie => {
        if(movie.id, 10 === Number(id)){
          console.log(movie.id, id)
          return {...movie, editedMovie};
        }
      });
      setMovieList(newMovieList);
     await movieAPI.updateMovie(editedMovie)
     setEditedMovie({})
     event.preventDefault();
    }

    return (
      <div data-testid="edit-movie">
        {isLoading ? <Loading /> :
          <MovieForm id={id} movieInfo={movieInfo} handleFormSubmit={handleFormSubmit} />}
      </div>
    );

}

export default EditMovie;
