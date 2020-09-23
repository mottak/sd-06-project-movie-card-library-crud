import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovies()
    .then(response => this.setState({
      movies: response,
      loading: false,
    }))
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {(loading) ? <Loading /> : movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
