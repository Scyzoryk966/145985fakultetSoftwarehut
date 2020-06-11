import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { useService } from '../../hooks/useService';
import { useSelector } from 'react-redux';

import {favouritesSelector} from "../../store/selectors/fav.selectors";


const FavPanel = () => {

  //const favourites = useSelector(favouritesSelector); //TODO: zrob coś żeby to nie usuwało ten tego... nwm

  return (
      <div>
        <NavPanel />
        {/*{favourites.map((favourites, index) => <div key={index}>{favourites.title}</div>)}*/}
      </div>
  );
};

export default FavPanel;