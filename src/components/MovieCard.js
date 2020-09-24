import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
  const { title, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h3>{storyline}</h3>
        <span>
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

export default MovieCard;
