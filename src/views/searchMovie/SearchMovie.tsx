import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import deBounce from "../../hooks/deBounce";
import { useService} from "../../hooks/useService";
import { FavouritesService } from '../../services/fav.service';
import { useSelector } from 'react-redux';
import { favouritesSelector } from '../../store/selectors/fav.selectors';
import { useHistory } from 'react-router';
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";



const useStyles = makeStyles({
    root: {
        marginBottom: "1vh",
        marginLeft: "1.5vw",
        display: "inline-block",
        width: '30vw',
        height: '80vh',
        textAlign: 'center',
    },
    content: {
        maxHeight:'15vh',
        overflow: 'hidden',
    },
    media: {
        marginTop : "1vh",
        height:'53vh',
    },
    center: {
        marginLeft: 'calc(50% - 16vw)',
        marginTop : "11vh",
        marginBottom : "2vh",
        width: '30vw',
    },
    action: {
        padding: 5,
        marginTop: 2,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
});


const SearchMovie = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');
    const debounce = deBounce(movieToSearch, 500);
    const history = useHistory();
    const favouritesService = useService(FavouritesService);
    const favourites = useSelector(favouritesSelector);
    const cookies = new Cookies();

    const RedirectTo = (
        path: string,
        name: string,
        state:
            {
                id: string,
                title: string,
                year: string,
                type: string,
                poster: string,
            }
    ) => <Button color="secondary" className={classes.action} onClick={() => history.push(path, state)}>{name}</Button>

    //TODO: poprawić debounce
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
    }

    const handleDelFavourites = (props : any) => {
        favouritesService.deleteFavourites({
            id: props.id,
            title: props.title,
            year: props.year,
            type: props.type,
            poster: props.poster
        });
    }
    cookies.set('fav', favourites, { path: '/' });
    return (
        <div>
            <NavPanel/>
            <TextField
                className={classes.center}
                color="secondary"
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
            <br />
                        {!!movies?.movies.length &&
                        movies?.movies.map((movie, index) => (
                            <Card className={classes.root} color="secondary" variant="outlined">
                                <CardActionArea >
                                    <CardContent className={classes.content}>
                                        <Typography className={classes.content} gutterBottom variant="h6" component="h2">
                                            <p>{movie.title}<br />{movie.year}</p>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {movie.type}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image={movie.poster !== "N/A" ? movie.poster : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                                        title={movie.title}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    {favourites.filter(f => f.id === movie.id).length ?
                                        <Button onClick={() => handleDelFavourites(movie)}
                                                size="small"
                                                color="secondary" variant="outlined"
                                                className={classes.action}
                                        >
                                            Usuń z ulubionych
                                        </Button>
                                        :
                                        <Button onClick={() => handleAddFavourites(movie)}
                                                size="small"
                                                color="secondary" variant="outlined"
                                                className={classes.action}
                                        >
                                            Dodaj do ulubionych
                                        </Button>
                                    }
                                        {RedirectTo("/searchDetail/"+movie.id, 'Szczegóły', {
                                            id: movie.id,
                                            title: movie.title,
                                            year: movie.year,
                                            type: movie.type,
                                            poster: movie.poster})}
                                </CardActions>
                            </Card>
                        ))
                        }

        </div>
    );
};
export default SearchMovie;
