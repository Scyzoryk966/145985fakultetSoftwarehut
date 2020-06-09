import { Reducer } from 'redux';
import { Actions, FavouritesStoreActions } from '../actions/fav.actions';


export interface IFavourites {
    id: number;
    title: string;
    year: string;
    type: string;
    poster: string
}

export interface IFavouritesListStoreState {
    list: IFavourites[];
}

export const favouritesListInitialState: IFavouritesListStoreState = {
    list: [
        {
            id: -1,
            title: "",
            year: "",
            type: "",
            poster: ""
        }
    ],
};


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
