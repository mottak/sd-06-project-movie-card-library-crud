import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from'./pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Router path="movies/new" component={NewMovie} />
        <Router path="movies/:id" component={MovieDetails} />
        <Router path="movies/:id/edit" component={EditMovie} />
        <Router path="/" component={MovieList} />
        <Router path="*" component={NotFound} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
