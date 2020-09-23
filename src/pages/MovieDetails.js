import React, { Component } from 'react';
// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {

  // componentDidMount() {
  //   this.getMyMovies();
  // }

  // async getMyMovies() {
  //   this.setState(
  //     { load: true },     // primeiro parametro por causa do Loading
  //     async () => {       // segundo parametro
  //       const movies = await movieAPI.getMovies();
  //       this.setState({
  //         load: false,
  //         movies,
  //       });
  //     });
  // }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
        <p>Details</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
