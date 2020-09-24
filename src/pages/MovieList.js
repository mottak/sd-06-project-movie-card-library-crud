import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      loading: true,
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const allMovies = await getMovies();
        this.setState({
          loading: false,
          movies: allMovies,
        })
      },
    )
  }

  renderMovieElement() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderMovieElement()}
      </div>
    );
  }
}

export default MovieList;
