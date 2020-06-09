import { IFavourites } from '../store/reducers/fav.reducer';
import store from '../store';
import { favouritesActions } from '../store/actions/fav.actions';

export class FavouritesService {

  setNewFavourites(favourites: IFavourites) {
   store.dispatch(favouritesActions.setNewFavourites(favourites));
  }

  deleteFavourites(favourites: IFavourites) {
    store.dispatch(favouritesActions.setDeleteFavourites(favourites));
  }


}
