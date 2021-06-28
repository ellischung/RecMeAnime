import React from 'react';
import { Grid } from "@material-ui/core";
import './Arrows.scss';

const Arrows = () => {
    // for down arrow mapping
    const arrows = ['first', 'second', 'third'];

    return (
        // animated down arrows, keyframes credits to ramachandra
        <Grid
            container
            direction="row" 
            justify="center" 
            alignItems="center" 
            alignContent="center"
            className="arrow__container"
        >
            {arrows.map(() => {
                return <Grid item className="arrow__down" style={{margin: "50px"}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Grid>
            })}
        </Grid>
    );
};

export default Arrows;