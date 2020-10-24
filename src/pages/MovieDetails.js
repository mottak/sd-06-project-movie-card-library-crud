import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { id } = this.props.match.params;
    const getApi = await movieAPI.getMovie(id);
    this.setState({
      movie: getApi,
      isLoading: false,
    });
  }

  render() {
    const { isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return isLoading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>

        <Link to={`/movies/${id}/edit`} className="links" >EDITAR</Link>
        <Link to={'/'} className="links">VOLTAR</Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  movie: PropTypes.object.isRequire,
  id: PropTypes.string.isRequire,
  isLoading: PropTypes.bool.isRequire,
}.isRequire;
export default MovieDetails;
