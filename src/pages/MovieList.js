import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import MovieDetails from './MovieDetails';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
    this.loadApi = this.loadApi.bind(this);
  }

  componentDidMount() {
    this.loadApi();
  }

  async loadApi() {
    const returnApi = await movieAPI.getMovies();
    this.setState({
      movies: returnApi,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div>
          <Link to={`/movies/new`}>ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: propTypes.number,
};

export default MovieList;
