import React, { useEffect, useContext, useState } from 'react';

// import { useRouteMatch } from 'react-router-dom';
import Context from '../Context/Context';
import * as movieAPI from '../services/movieAPI';
import { Loading, Header, Details } from '../components';
import Section from '../assets/themeComponets/Section';
import SectionItem from '../assets/themeComponets/SectionItem';

function MovieDetails({match}) {
  const {id: routeId} = match.params
  // const { id } = useRouteMatch();
  const { setMovieDetails, movieDetails } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieDetail = async () => {
      const details = await movieAPI.getMovie(routeId);
      setMovieDetails(details);
      setIsLoading(false);
    };
    getMovieDetail();
  }, []);
  return (
    <Section data-testid="movie-details">
      <Header title="Detalhes" />
      {isLoading ? (
        <Loading />
      ) : (
        <SectionItem  
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Details id={routeId} isLoading={isLoading} />
        </SectionItem>
      )}
    </Section>
  );
}

export default MovieDetails;
