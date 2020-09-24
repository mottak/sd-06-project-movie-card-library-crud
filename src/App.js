import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
