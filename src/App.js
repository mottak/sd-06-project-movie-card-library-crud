import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
// import index from './components/index';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
