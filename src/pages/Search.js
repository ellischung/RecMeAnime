import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/search';
import AnimeList from '../components/AnimeList';
import { Box, Typography } from '@material-ui/core';

const Search = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    // Constantly checks to see if anime data exists
    // Pull from local storage if it doesn't exist; if none from local storage, log error
    useEffect(() => {
        if (search.animeData === undefined || search.animeData.length === 0) {
            try {
                search.setData(JSON.parse(localStorage.getItem('myData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        console.log(search.animeData);
    }, [search]);

    return ( 
        // Display components (list + cards for each entry from search)
        <Box mt={2}>
            {(dataExists && <AnimeList />) || (
            <Typography variant="h4">Data does not exist</Typography>
            )}
        </Box>
    );
};

export default Search;