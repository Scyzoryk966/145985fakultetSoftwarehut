import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '20px',
    },
    icon: {
        marginBottom: '-5px',
        marginRight: '5px',
    }
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
                    <p ><HomeIcon className={classes.icon}>Home</HomeIcon>{RedirectTo('/', 'Home')}</p>
                        <p><MovieIcon className={classes.icon}>Movie</MovieIcon>{RedirectTo('/movie', 'Movie')}</p>
                        <p><SearchIcon className={classes.icon}>Search</SearchIcon>{RedirectTo('/search', 'Search Movie')}</p>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;