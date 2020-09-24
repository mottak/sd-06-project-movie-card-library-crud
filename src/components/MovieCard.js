import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const detailsPath = `/movies/${movie.id}`;

    return (
      <div data-testid="movie-card">
        <h1>{movie.title}</h1>
        <p>{movie.storyline}</p>
        <Link to={detailsPath}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  bookmarked: PropTypes.bool,
  genre: PropTypes.string,
}) }.isRequired;

export default MovieCard;
