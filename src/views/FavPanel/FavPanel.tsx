import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {favouritesSelector} from "../../store/selectors/fav.selectors";
import {useService} from "../../hooks/useService";
import {FavouritesService} from "../../services/fav.service";



const useStyles = makeStyles({
    root: {
        marginBottom: "1vh",
        marginLeft: "1.5vw",
        display: "inline-block",
        width: '30vw',
        height: '80vh',
        // marginRight: 'auto',
        // marginLeft: 'auto',
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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop : "11vh",
        marginBottom : "2vh",
        width: '100%',
        textAlign: 'center',
    },
    action: {
        padding: 5,
        marginTop: 2,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
});


const FavPanel = () => {
    const classes = useStyles();

    const favouritesService = useService(FavouritesService);
    const favourites = useSelector(favouritesSelector);

    const handleDelFavourites = (props : any) => {
        favouritesService.deleteFavourites({
            id: props.id,
            title: props.title,
            year: props.year,
            type: props.type,
            poster: props.poster
        });
    }

    return (
      <div>
        <NavPanel />
        <h1 className={classes.center}>Favorites:</h1>
          {favourites.map((favourites) =>(
              <Card className={classes.root} color="secondary" variant="outlined">
                  <CardActionArea >
                      <CardContent className={classes.content}>
                          <Typography className={classes.content} gutterBottom variant="h6" component="h2">
                              <p>{favourites.title}<br />{favourites.year}</p>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {favourites.type}
                          </Typography>
                      </CardContent>
                      <CardMedia
                          className={classes.media}
                          image={favourites.poster !== "N/A" ? favourites.poster : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                          title={favourites.title}
                      />
                  </CardActionArea>
                  <CardActions>
                      <Button onClick={() => handleDelFavourites(favourites)}
                              size="small"
                              color="secondary" variant="outlined"
                              className={classes.action}
                      >
                          Usuń z ulubionych
                      </Button>
                  </CardActions>
              </Card>
          ))
          }

      </div>

  );
};

export default FavPanel;