import { Reducer } from 'redux';
import { Actions, FavouritesStoreActions } from '../actions/fav.actions';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
let init = [];
export interface IFavourites {
    id: string;
    title: string;
    year: string;
    type: string;
    poster: string
}

export interface IFavouritesListStoreState {
    list: IFavourites[];
}

if(cookies.get('fav')!==undefined)
{
    init = cookies.get('fav')
}
export const favouritesListInitialState: IFavouritesListStoreState = {
    list: init,
};

console.log(cookies.get('myCat'))
export const favouritesStoreReducer: Reducer<IFavouritesListStoreState, Actions> = (state: IFavouritesListStoreState = favouritesListInitialState, actions: Actions) => {
    switch (actions.type) {
        case FavouritesStoreActions.SET_NEW_FAV :
            return {
                ...state,
                list: [...state.list, actions.payload.favourites]
            };
        case FavouritesStoreActions.SET_DELETE_FAV:
            return {
                ...state,
                list: state.list.filter(el => el.id !== actions.payload.favourites.id)
            }
        default:
            return state;
    }
};
