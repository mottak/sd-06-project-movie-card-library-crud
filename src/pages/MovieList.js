import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.setMoviesState = this.setMoviesState.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.setMoviesState();
  }

  async setMoviesState() {
    const getMovies = await movieAPI.getMovies();
    console.log(getMovies);
    this.setState({
      movies: getMovies,
    });
  }

  setLoading() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return (
        <div>
          <Loading> </Loading>
        </div>
      );
    }
    return (
      <div>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { movies } = this.state;
    const loading = this.setLoading();
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">

        {loading}

      </div>
    );
  }
}

export default MovieList;
