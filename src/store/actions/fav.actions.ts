import { IFavourites } from '../reducers/fav.reducer';

export enum FavouritesStoreActions {
  SET_NEW_FAV = 'SET_NEW_FAV',
  SET_DELETE_FAV = 'SET_DELETE_FAV',
}


export interface ISetNewFavourites {
  type: FavouritesStoreActions.SET_NEW_FAV,
  payload: {
    favourites: IFavourites
  }
}

export interface ISetDeleteFavourites {
  type: FavouritesStoreActions.SET_DELETE_FAV,
  payload: {
    favourites: IFavourites
  }
}

export const favouritesActions = {
  setNewFavourites: (favourites: IFavourites) => ({
    type: FavouritesStoreActions.SET_NEW_FAV,
    payload: {
      favourites
    }
  }),
  setDeleteFavourites: (favourites: IFavourites) => ({
    type: FavouritesStoreActions.SET_DELETE_FAV,
    payload: {
      favourites
    }
  })
};


export type Actions =  ISetNewFavourites & ISetDeleteFavourites;