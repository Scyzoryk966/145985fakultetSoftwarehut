import React from 'react';
import { useService } from '../../hooks/useService';
import { FavouritesService } from '../../services/fav.service';
import { useSelector } from 'react-redux';
import { favouritesSelector } from '../../store/selectors/fav.selectors';


const FavPanel = () => {
  const favouritesService = useService(FavouritesService);
  const favourites = useSelector(favouritesSelector);

  React.useEffect(() => {
    favouritesService.setNewFavourites({
      id: 1,
      title: "123123123",
      year: "1111",
      type: "123",
      poster: "1234"
    });
  }, []);


  return <div>{favourites.map((favourites, index) => <div key={index}>{favourites.title}</div>)}</div>;
};


export default FavPanel;
