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
              <Route path="/145985fakultetSoftwarehut/movie" component={Movie}/>
              <Route path="/145985fakultetSoftwarehut/search" component={SearchMovie}/>
              <Route path="/145985fakultetSoftwarehut/searchDetail/:id" component={SearchMovieDetail}/>
              <Route path="/145985fakultetSoftwarehut/todo" component={TodoPanel}/>
              <Route path="/145985fakultetSoftwarehut/fav" component={FavPanel}/>
              <Route path="/145985fakultetSoftwarehut/" component={Home}/>
            </Switch>
          </Provider>
        </BrowserRouter>
    </div>
  );
};

export default App;




