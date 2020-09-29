import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading.js'
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      shouldRedirect: false,
      status: 'loading',
      movies: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id).then((result) => {
      this.setState({
        status: null,
        movie: result,
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({shouldRedirect: true});
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <redirect to="/" />
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = { match: PropTypes.objectOf(PropTypes.any).isRequired };

export default EditMovie;
