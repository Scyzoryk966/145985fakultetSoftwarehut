import { combineReducers } from 'redux';

import { ITodosListStoreState, todosListInitialState, todosStoreReducer } from './reducers/todos.reducer';
import { IFavouritesListStoreState, favouritesListInitialState, favouritesStoreReducer } from './reducers/fav.reducer';
import * as TodosActions from './actions/todos.actions';
import * as FavouritesActions from './actions/fav.actions'

export type StoreActions = TodosActions.Actions;
export type StoreActionsFav = FavouritesActions.Actions;

export interface IStoreState {
  favourites: IFavouritesListStoreState;
  todos: ITodosListStoreState;
}

export const initialStoreState: IStoreState = {
  favourites: favouritesListInitialState,
  todos: todosListInitialState,
};

export const reducers = combineReducers<IStoreState>({
  favourites: favouritesStoreReducer,
  todos: todosStoreReducer,
});
