import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components'


class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;
   if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
