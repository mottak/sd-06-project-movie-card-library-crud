import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.fetchMovieInfo = this.fetchMovieInfo.bind(this);

    this.state = {
      loading: true,
      movie: {},
    }
  }

  componentDidMount() {
    this.fetchMovieInfo();
  }

  async fetchMovieInfo() {
    const { id } = this.props.match.params;
    this.setState({
      loading: false,
      movie: await movieAPI.getMovie(id),
    });
  }

  render() {
    // Change the condition to check the state
    if (this.state.loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
