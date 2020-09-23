import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening


    return (
      <div data-testid="movie-list">
        <Loading />
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
