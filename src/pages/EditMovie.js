import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from "../components/Loading"
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMovieState = this.setMovieState.bind(this);
    this.setLoadingMovieEdit = this.setLoadingMovieEdit.bind(this);
    this.state = {
      status: 'loading',
    };
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
     this.setState({
      shouldRedirect: true,
    });
  }

  componentDidMount() {
    this.setMovieState();
  }

  async setMovieState() {
    const { match: { params: { id } } } = this.props;
    const getMovies = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovies,
    });
  }

  setLoadingMovieEdit() {
    const { movie } = this.state;
    if (!movie) {
      return (
        <div>
          <Loading> </Loading>
        </div>
      );
    }
    return (
      <div>
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { shouldRedirect } = this.state
     if (shouldRedirect) {
    return  <Redirect  to='/'/>
    }
    return (
      <div data-testid="edit-movie">
        { this.setLoadingMovieEdit() }
      </div>
    );
  }
}

export default EditMovie;
