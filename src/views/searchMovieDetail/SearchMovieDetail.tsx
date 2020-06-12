import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { useService} from "../../hooks/useService";
import { FavouritesService } from '../../services/fav.service';
import { useSelector } from 'react-redux';
import { favouritesSelector } from '../../store/selectors/fav.selectors';
import movieService from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';

import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import Cookies from 'universal-cookie';



const useStyles = makeStyles({
    root: {
        marginTop: "6vh",
        marginBottom: "1vh",
        marginLeft: "1.5vw",
        display: "inline-block",
        width: '30vw',
        height: '85vh',
        textAlign: 'center',
    },
    root2: {
        marginTop: "6vh",
        marginBottom: "1vh",
        marginLeft: "1.5vw",
        display: "inline-block",
        width: '64.5vw',
        height: '85vh',
        textAlign: 'left',
    },
    content: {
        maxHeight:'15vh',
        overflow: 'hidden',
        padding: 20
    },
    media: {
        marginTop : "1vh",
        height:'70vh',
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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const SearchMovieDetail = (props :any) => {
    const classes = useStyles();
    const [reciveMovie, setMovie] = React.useState({
        id: '',
        title: '',
        year: '',
        type: '',
        poster: '',
    });
    const [movieInfo, setMovieInfo] = React.useState({
        actors: '',
        ageRating: '',
        awards: '',
        director: '',
        plot: '',
        poster: '',
        production: '',
        rating: '',
        releaseDate: '',
        title: '',
        votes: '',
        writer: '',
    });
    const favouritesService = useService(FavouritesService);
    const favourites = useSelector(favouritesSelector);
    const cookies = new Cookies();

    React.useEffect(() => {
        setMovie(props.location.state)
        movieService.searchById(reciveMovie.id).then(resp => {
            if (resp) {
                setMovieInfo({
                    actors: resp.actors,
                    ageRating: resp.rating,
                    awards: resp.awards,
                    director: resp.director,
                    plot: resp.plot,
                    poster: resp.poster,
                    production: resp.production,
                    rating: resp.rating,
                    releaseDate: resp.releaseDate,
                    title: resp.title,
                    votes: resp.votes,
                    writer: resp.writer,
                })
            }
        });
        console.log('halo?')
    },[props.location.state, reciveMovie]);

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
            <br />
            <br />

                            <Card className={classes.root} color="secondary" variant="outlined">
                                <CardActionArea >
                                    <CardContent className={classes.content}>
                                        <Typography className={classes.content} gutterBottom variant="h6" component="h2">
                                            <p>{movieInfo.title}</p>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {movieInfo.director}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image={movieInfo.poster !== "N/A" ? movieInfo.poster : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                                        title={movieInfo.title}
                                    />
                                </CardActionArea>
                            </Card>
            <Card className={classes.root2} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom variant="h2" component="h1">
                        <h2>Information:</h2>
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        Actors: {movieInfo.actors}
                    </Typography>
                    <Typography className={classes.pos} color="secondary">
                        Rating: {movieInfo.rating}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        Awards: {movieInfo.awards}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        Plot: {movieInfo.plot}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        Production: {movieInfo.production}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                        Release Date: {movieInfo.releaseDate}
                    </Typography>
                </CardContent>
                <CardActions >
                    {favourites.filter(f => f.id === reciveMovie.id).length ?
                                        <Button onClick={() => handleDelFavourites(reciveMovie)}
                                                size="small"
                                                color="secondary" variant="outlined"
                                                className={classes.action}
                                        >
                                            Usuń z ulubionych
                                        </Button>
                                        :
                                        <Button onClick={() => handleAddFavourites(reciveMovie)}
                                                size="small"
                                                color="secondary" variant="outlined"
                                                className={classes.action}
                                        >
                                            Dodaj do ulubionych
                                        </Button>
                                    }
                </CardActions>
            </Card>
        </div>
    );
};

export default SearchMovieDetail;
