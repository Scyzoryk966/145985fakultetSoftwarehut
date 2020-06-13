import React from 'react';
import {Button, Drawer} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '20px',
        width: '20vh',
        padding: '10px',
    },
    button: {
        margin: theme.spacing(1),
        padding: '10px',
        width: "20vh"
    },
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
    onDrawerClose: () => void;
}


const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen, onDrawerClose }) => {
    const classes = makeClasses();
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();

    const RedirectTo = (path: string, name: string, startIcon: any) => (<Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={startIcon}
        onClick={() => history.push(path)}
    >{name}</Button>)



{/*
    <div onClick={() => history.push(path)}>{name}</div>
*/}


    return (
        <div>
            <Drawer
                open={isOpen || shouldBeOpen}
                onClose={() => {
                    setIsOpen(false)
                    onDrawerClose()
                }}
            >
                <div className={classes.drawerContent}>

                        {RedirectTo('/145985fakultetSoftwarehut/', 'Home', <HomeIcon />)}
                        {RedirectTo('/145985fakultetSoftwarehut/movie', 'Movie', <MovieIcon />)}
                        {RedirectTo('/145985fakultetSoftwarehut/search', 'Search', <SearchIcon />)}
                        {RedirectTo('/145985fakultetSoftwarehut/fav', 'Favourites', <FavoriteIcon />)}
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;