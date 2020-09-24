import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      id: 0,
    }
  }

  fetchDetails() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id)
        .then(response => this.setState(
          {
            movie: response,
            loading: false,
            id,
          }
        ));
    });
  }

  componentDidMount() {
    this.fetchDetails();
  }

  render() {
    const { loading, id, movie: { title, storyline, imagePath, genre, rating, subtitle } } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
          <button><Link to="/">VOLTAR</Link></button>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
