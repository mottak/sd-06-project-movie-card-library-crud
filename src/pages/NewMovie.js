import React, { Component } from 'react';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { shouldRedirect: false };
  }

  handleSubmit(newMovie) {
    this.setState(
      { shouldRedirect: false },
      () => {
        movieAPI.createMovie(newMovie);
        this.setState({
          shouldRedirect: true,
        });
      });
  }


  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
