import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route ṕath="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
