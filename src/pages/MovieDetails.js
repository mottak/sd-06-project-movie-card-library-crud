import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props){
    super();

    this.state = {
      movieId: props.match.params.id,
      loading: true,
      movie: {},
    }

  }
  
  componentDidMount(){
    const { movieId } = this.state;
    movieAPI.getMovie(movieId).then((result) => {
      this.setState({
        loading: false,
        movie: result,
      })
    });
  }

  render() {
    {if (this.state.loading === true) return <Loading />};
    const { movie } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
