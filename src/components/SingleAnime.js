import React from 'react';
import { Grid, Typography, Paper} from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './SingleAnime.scss'

const SingleAnime = (props) => {
    // information to be displayed for each anime
    const {title, image_url, score, episodes, premiered, rating, synopsis} = props.info;

    // for down arrow mapping
    const arrows = ['first', 'second', 'third'];

    return (
        <React.Fragment>
            {/* display single anime + at most 10 recommendations */}
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
            {/* 3 animated arrows pointing to recommendations */}
            <Grid
                container
                direction="row" 
                justify="center" 
                alignItems="center" 
                alignContent="center"
                className="arrow__container"
            >
                {arrows.map((arrow) => {
                    return <Grid item className="arrow__down" style={{margin: "50px"}}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Grid>
                })}
            </Grid>
            {/* list of at most 10 recommendations */}
        </React.Fragment>
    );
};

export default SingleAnime;