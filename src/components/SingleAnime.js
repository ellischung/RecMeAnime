import React from 'react';
import { Grid, Typography, Paper} from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './SingleAnime.scss'

const SingleAnime = (props) => {
    // information to be displayed for each anime
    const {title, image_url, score, episodes, premiered, rating, synopsis} = props.info;

    return (
        // display the single anime with all relevant information
        <Grid
            container
            spacing={10}
            direction="row" 
            justify="center" 
            alignItems="center" 
            alignContent="center"
            className="singleAnime__container"
        >
            <Grid item>
                <img src={image_url} alt={title} className="singleAnime__image" />
            </Grid>
            <Grid item>
                <Paper elevation={3} className="singleAnime__description">
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2" style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                        <StarBorderIcon fontSize="medium" color="primary" />{score}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Episodes: {episodes}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Premiered: {premiered}
                    </Typography>
                    <Typography variant="h5" component="h2" paragraph={true}>
                        Rating: {rating}
                    </Typography>
                    <Typography variant="h5" component="h2" style={{width: 1000}}>
                        {synopsis}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SingleAnime;