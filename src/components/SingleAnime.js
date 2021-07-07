import React, { useState } from 'react';
import { Grid, Typography, Paper, Button, Modal} from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './SingleAnime.scss'

const SingleAnime = (props) => {
    // information to be displayed for each anime
    const {title, image_url, score, episodes, premiered, rating, synopsis} = props.info;

    // state hook for modal
    const [open, setOpen] = useState(false);
    
    // open modal handler function
    const handleOpen = () => {
        setOpen(true);
    };

    // close modal handler function
    const handleClose = () => {
        setOpen(false);
    };

    // score stats to be displayed by modal
    const scores = (
        <div style={{width: "800px", backgroundColor: "white", border: "2px solid #000000"}}>
            {/* Bar graph taken from css-tricks */}
            <dl>
                {Object.keys(props.scores).map((score) => (
                    // each bar's individual percentage and length mapped out here
                    <dd 
                        class={
                            `percentage percentage-${
                                props.scores[score].percentage < 1 
                                    ? 1
                                    : Math.round(props.scores[score].percentage)
                            }`
                        }
                    >
                        {/* Text next to each bar */}
                        <span class="score__text">
                            <Typography variant="h6" component="h2" style={{marginRight: "10px"}}>{score}:</Typography> 
                            {props.scores[score].votes} votes ({props.scores[score].percentage}%)  
                        </span>
                    </dd>
                ))}
            </dl>
        </div>
    );

    return (
        // display the single anime with all of the information from props
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
                        <StarBorderIcon fontSize="medium" color="primary" />
                        {score}
                        {/* Modal for stats */}
                        <div>
                            <Button onClick={handleOpen} variant="outlined" color="primary" size="small" style={{marginLeft: "20px"}}>
                                <Typography variant="body2" component="h2">
                                    Score stats
                                </Typography>
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                style={{
                                    display: "flex", 
                                    alignItems: "center", 
                                    flexWrap: "wrap", 
                                    left: "30%"
                                }}
                            >
                                {scores}
                            </Modal>
                        </div>
                        {/* End of modal for stats */}
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