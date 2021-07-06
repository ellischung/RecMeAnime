import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { SearchContext } from '../context/search';
import { Typography, Link, Paper, GridListTile, Grid, Tooltip, Button } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './AnimeCard.scss';

const AnimeCard = (props) => {
    const history = useHistory();
    const search = useContext(SearchContext);

    // handler for clicking on an anime and redirecting to results page
    const onClickHandler = () => {
        // fetch the anime that was clicked on
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
            .then((response) => response.json())
            .then((data) => {
                search.setSingle(data);
                localStorage.setItem('singleData', JSON.stringify(data));
            });
        // fetch the score stats for said anime
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}/stats`)
            .then((response) => response.json())
            .then((data) => {
                search.setScore(data.scores);
                localStorage.setItem('scoreData', JSON.stringify(data.scores));
            });
        // fetch the list of recommendations for said anime
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}/recommendations`)
            .then((response) => response.json())
            .then((data) => {
                search.setRec(data.recommendations);
                localStorage.setItem('recData', JSON.stringify(data.recommendations));
            });
        // push to results after fetches
        history.push('/results');
    };

    // info to be shown for each individual anime card
    const title = props.anime.title;
    const imageUrl = props.anime.image_url;
    const score = props.anime.score;
    const episodes = props.anime.episodes;
    const synopsis = props.anime.synopsis; 

    return (
        // formatted anime card with info displayed here 
        <GridListTile className="animeCard__container">
            <Link onClick={onClickHandler}>
                <Grid container item xs={12}>
                    <Paper className="animeCard__paper">
                        <img src={imageUrl} alt={title} style={{maxHeight: 300}} />
                        <Tooltip title={title} placement="top" arrow>
                            <Button>
                                <Typography variant="h6" component="h2">
                                    {props.anime.title.length > 15 
                                        ? `${props.anime.title.substring(0, 15)}...` 
                                        : props.anime.title
                                    }
                                </Typography>
                            </Button>
                        </Tooltip>
                        <Typography variant="body2" component="h2" style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                            <StarBorderIcon fontSize="small" color="primary" />{score}
                        </Typography>
                        <Typography variant="body2" component="h2" paragraph={true}>
                            Episodes: {episodes}
                        </Typography>
                        <Tooltip title={synopsis} placement="top" arrow>
                            <Button variant="outlined" color="primary" size="small">
                                <Typography variant="body2" component="h2">
                                    Synopsis
                                </Typography>
                            </Button>
                        </Tooltip>
                    </Paper>
                </Grid>
            </Link>
        </GridListTile>
    );
};

export default AnimeCard;