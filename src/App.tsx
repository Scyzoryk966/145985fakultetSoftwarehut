import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Movie from './views/movie/Movie';
import SearchMovie from './views/searchMovie/SearchMovie';
import SearchMovieDetail from './views/searchMovieDetail/SearchMovieDetail';
import Home from './views/home/Home';
import TodoPanel from './views/todoPanel/TodoPanel';
import FavPanel from './views/FavPanel/FavPanel';
import { Provider } from 'react-redux';
import store from './store';


//yarn add @types/react-router-dom  @types/react-router


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Provider store={store}>
            <Switch>
              <Route path="/movie" component={Movie}/>
              <Route path="/search" component={SearchMovie}/>
              <Route path="/searchDetail/:id" component={SearchMovieDetail}/>
              <Route path="/todo" component={TodoPanel}/>
              <Route path="/fav" component={FavPanel}/>
              <Route path="/" component={Home}/>
            </Switch>
          </Provider>
        </BrowserRouter>
    </div>
  );
};

export default App;




