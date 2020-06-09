import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import deBounce from "../../hooks/deBounce";
import { useService} from "../../hooks/useService";
import { FavouritesService } from '../../services/fav.service';
import { useSelector } from 'react-redux';
import { favouritesSelector } from '../../store/selectors/fav.selectors';

import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Button,
    ButtonBase,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@material-ui/core";

import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    table: {
        minWidth: '650px',
        maxWidth: '100%',
    },
    root: {
        maxWidth: 400,
        marginBottom: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
    },
    media: {
        height: 450,
    },
    center: {
        marginLeft: 'calc(50% - 16vw)',
        width: '32vw',
    },

});


const SearchMovie = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');
    const debounce = deBounce(movieToSearch, 500);

    const favouritesService = useService(FavouritesService);
    const favourites = useSelector(favouritesSelector);

    React.useEffect(() => {
        if (debounce){
            movieService.searchByName(movieToSearch).then(resp => {
                if (resp) {
                    setMovies(resp);
                }
                else
                {
                    setMovies(null);
                }
            });

            //movieService.searchById('tt0848228');
        }

    }, [debounce, movieToSearch]);

    const handleAddFavourites = (props : any) => {
        favouritesService.setNewFavourites({
            id: props.id,
            title: props.title,
            year: props.year,
            type: props.type,
            poster: props.poster
        });
        console.log(favourites)
    }
    return (
        <div>
            <NavPanel/>
            <TextField
                className={classes.center}
                id="outlined-full-width"
                label="Wyszukaj Film"
                placeholder="Tytuł filmu"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={event => setMovieToSearch(event.target.value)}
            />
                        {!!movies?.movies.length &&
                        movies?.movies.map(movie => (
                            <Card className={classes.root} variant="outlined">
                                <CardActionArea >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p>{movie.title}<br />{movie.year}</p>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {movie.type}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image={movie.poster}
                                        title={movie.title}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    {/*TODO: zrobić zmiane buttona po dodaniu fav i fav całe*/}
                                    {favourites.filter(el => el.id !== movie.id) ?
                                        <Button onClick={() => handleAddFavourites(movie)} size="small" color="primary">
                                        Dodaj do ulubionych
                                        </Button>
                                        :
                                        ''
                                    }

                                    <Button size="small" color="primary">
                                        Nic
                                    </Button>
                                </CardActions>
                            </Card>

                        ))
                        }

        </div>
    );
};

export default SearchMovie;
