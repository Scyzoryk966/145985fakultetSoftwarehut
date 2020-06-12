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

    const RedirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>


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
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<HomeIcon />}
                    >
                        {RedirectTo('/145985fakultetSoftwarehut/', 'Home')}
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<MovieIcon />}
                    >
                        {RedirectTo('/145985fakultetSoftwarehut/movie', 'Movie')}
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<SearchIcon />}
                    >
                        {RedirectTo('/145985fakultetSoftwarehut/search', 'Search')}
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<FavoriteIcon />}
                    >
                        {RedirectTo('/145985fakultetSoftwarehut/fav', 'Favourites')}
                    </Button>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;