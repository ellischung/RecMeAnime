import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/search';
import { Typography } from '@material-ui/core';
import SingleAnime from '../components/SingleAnime';
import Arrows from '../components/Arrows';
import RecList from '../components/RecList';

const Results = () => {
    const search = useContext(SearchContext);
    const [singleExists, setSingleExists] = useState(true);
    const [recExists, setRecExists] = useState(true);

    // Constantly checks to see if data exists for both the single anime and recommendations
    // Pull from local storage if it doesn't exist; if none from local storage, log error
    useEffect(() => {
        // single anime check
        if(search.singleData === undefined || Object.keys(search.singleData).length === 0) {
            try {
                search.setSingle(JSON.parse(localStorage.getItem('singleData')));
                setSingleExists(true);
            } catch (error) {
                console.log(error);
                setSingleExists(false);
            }
        }
        // recommendations check
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
            {/* single anime */}
            {(singleExists && <SingleAnime info={search.singleData} />) || (
                <Typography variant="h4" component="h2">
                    Data does not exist
                </Typography>
            )}
            {/* down arrows */}
            <Arrows />
            {/* recommendations */}
            {(recExists && <RecList data={search.recData} />) || (
                <Typography variant="h4" component="h2">
                    Data does not exist
                </Typography>
            )}
        </React.Fragment>
    );
};

export default Results;