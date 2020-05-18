import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: '650px',
        maxWidth: '100%',
    },
    root: {
        maxWidth: 400,
        padding: '20px',
        marginBottom: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        border: '3px solid black',
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

    React.useEffect(() => {
        movieService.searchByName(movieToSearch).then(resp => {
            if (resp) {
                setMovies(resp);
            }
        });

        movieService.searchById('tt0848228');
    }, [movieToSearch]);


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
                            <Card className={classes.root}>
                                <CardActionArea>
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
                            </Card>
                            /*<TableRow key={movie.id}>
                                <TableCell>
                                    <img src={movie.poster}
                                         alt={movie.title}/>
                                </TableCell>
                                <TableCell align="right"> {movie.title}</TableCell>
                                <TableCell align="right"> {movie.type}</TableCell>
                                <TableCell align="right"> {movie.year}</TableCell>
                            </TableRow>*/
                        ))
                        }

        </div>
    );
};

export default SearchMovie;