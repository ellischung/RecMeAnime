import React from 'react';
import { SearchContext } from '../context/search';
import { Typography, Link, Paper, GridListTile, Grid } from '@material-ui/core';

const AnimeCard = (props) => {
    const title = props.anime.title.length;
    const imageUrl = props.anime.image_url;
    const synopsis = props.anime.synopsis;

    // formatted individual result from search displayed here
    return <GridListTile>
        <Grid container item xs={12}>
            <Paper>
                <img src={imageUrl} alt={title} style={{maxHeight: 300}} />
            </Paper>
        </Grid>
    </GridListTile>;
};

export default AnimeCard;