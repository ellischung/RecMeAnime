import { Typography } from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/search';
import SingleAnime from '../components/SingleAnime';

const Results = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    // Constantly checks to see if anime data exists
    // Pull from local storage if it doesn't exist; if none from local storage, log error
    useEffect(() => {
        if(search.singleData === undefined || Object.keys(search.singleData).length === 0) {
            try {
                search.setSingle(JSON.parse(localStorage.getItem('singleData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        console.log(search.singleData);
    }, [search]);

    return (
        // display single anime + recommendations
        <div>
            {dataExists && <SingleAnime /> || <Typography variant="h4" component="h2">Data does not exist</Typography>}
        </div>
    );
};

export default Results;