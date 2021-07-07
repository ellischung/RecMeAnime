import React, { useContext } from 'react';
import { SearchContext } from '../context/search';
import { Typography, Link, Paper, GridListTile, Grid, Tooltip, Button } from '@material-ui/core';
import './AnimeRec.scss';

const AnimeRec = (props) => {
    const search = useContext(SearchContext);

    // handler for clicking on an anime rec (stays on results page)
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
            })
    };

    // info to be shown for each individual anime rec
    const title = props.anime.title;
    const imageUrl = props.anime.image_url;
    const recCount = props.anime.recommendation_count; 

    return (
        // formatted anime rec with info displayed here 
        <GridListTile className="animeRec__container">
            <Link onClick={onClickHandler}>
                <Grid container item xs={12}>
                    <Paper className="animeRec__paper">
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
                            User recommendations:
                            <Typography color="primary" variant="h6" component="h2" style={{marginLeft: "5px"}}>{recCount}</Typography>
                        </Typography>
                    </Paper>
                </Grid>
            </Link>
        </GridListTile>
    );
};

export default AnimeRec;