import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const editLink = `/movies/${id}/edit`;

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={editLink}>EDITAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
