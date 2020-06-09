import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {initialStoreState, IStoreState, reducers, /*StoreActions,*/ StoreActionsFav} from './store';


//const store = createStore<IStoreState, StoreActions, any, any>(reducers, initialStoreState, composeWithDevTools());
const store = createStore<IStoreState, StoreActionsFav, any, any>(reducers, initialStoreState, composeWithDevTools());
export default store;

