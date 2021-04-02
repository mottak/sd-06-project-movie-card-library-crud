import React, { useEffect, useState } from 'react';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

function EditMovie({match}){
  const { id } = match.params;
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const getMovieToEdit = async () => {
      const movie = await movieAPI.getMovie(id);
      console.log(movie)
      setMovieInfo(movie);
      setIsLoading(false);
    };
    getMovieToEdit();
  }, []);

  // handleSubmit(updatedMovie) {
  // }

  
    // const { status, shouldRedirect, movie } = this.state;
    // if (shouldRedirect) {
    //   // Redirect
    // }

    // if (status === 'loading') {
    //   // render Loading
    // }

    return (
      <div data-testid="edit-movie">
        {isLoading ? <Loading /> :
          <MovieForm id={id} />}
      </div>
    );

}

export default EditMovie;
