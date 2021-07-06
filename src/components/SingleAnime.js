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
        <div style={{width: "600px", backgroundColor: "lightgray", border: "2px solid #000000"}}>
            {Object.keys(props.scores).map((score) => (
                <div>
                    {score} {props.scores[score].percentage} {props.scores[score].votes}
                </div>
            ))}
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
                                    Stats
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