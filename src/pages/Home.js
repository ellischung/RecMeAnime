import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../context/search';
import {FormControl, Input, IconButton, Grid} from '@material-ui/core';

const Home = () => {
    const search = useContext(SearchContext);
    useEffect(() => {
        search.search('Bakemonogatari').then((data) => {
            console.log(data);
        });
    }, [search]);

    return (
        <Grid 
            container 
            direction="column" 
            justify="center" 
            alignContent="center" 
            alignItems="center"
        >
            <Grid item>
                <Grid item>
                    <img 
                        alt="logo" 
                        src={`${process.env.PUBLIC_URL}/RecMeAnime-Logo.png`} 
                        height={150} 
                        width={700} 
                    />
                </Grid>
                <Grid item>Search Bar</Grid>    
            </Grid>
        </Grid>
    );
};

export default Home;