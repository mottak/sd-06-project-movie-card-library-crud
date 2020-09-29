import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
