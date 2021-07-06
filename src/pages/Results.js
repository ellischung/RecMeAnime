import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/search';
import { Typography } from '@material-ui/core';
import SingleAnime from '../components/SingleAnime';
import Arrows from '../components/Arrows';
import RecList from '../components/RecList';

const Results = () => {
    const search = useContext(SearchContext);
    const [singleExists, setSingleExists] = useState(true);
    const [scoreExists, setScoreExists] = useState(true);
    const [recExists, setRecExists] = useState(true);

    // Constantly checks to see if data exists for single anime, scores, and recommendations
    // Pull from local storage if it doesn't exist; if none from local storage, log error
    useEffect(() => {
        // check if single anime data exists
        if(search.singleData === undefined || Object.keys(search.singleData).length === 0) {
            try {
                search.setSingle(JSON.parse(localStorage.getItem('singleData')));
                setSingleExists(true);
            } catch (error) {
                console.log(error);
                setSingleExists(false);
            }
        }
        // check if score data exists
        if(search.scoreData === undefined) {
            try {
                search.setScore(JSON.parse(localStorage.getItem('scoreData')));
                setScoreExists(true);
            } catch (error) {
                console.log(error);
                setScoreExists(false);
            }
        }
        // check if recommendations data exists
        if(search.recData === undefined) {
            try {
                search.setRec(JSON.parse(localStorage.getItem('recData')));
                setRecExists(true);
            } catch (error) {
                console.log(error);
                setRecExists(false);
            }
        }
    }, [search]);

    return (
        // display single anime + down arrows + recommendations
        <React.Fragment>
            {/* single anime w/ scores */}
            {(singleExists && scoreExists
                ? <SingleAnime info={search.singleData} scores={search.scoreData} />
                : <Typography variant="h4" component="h2">Data does not exist</Typography>
            )}
            {/* down arrows */}
            <Arrows />
            {/* recommendations */}
            {(recExists 
                ? <RecList data={search.recData} />
                : <Typography variant="h4" component="h2">Data does not exist</Typography>
            )}
        </React.Fragment>
    );
};

export default Results;