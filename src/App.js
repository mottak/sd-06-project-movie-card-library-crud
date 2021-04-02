import React from 'react';
import Provider from './Context/Provider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (
    <Provider>

    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route component={NotFound} />
     </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
