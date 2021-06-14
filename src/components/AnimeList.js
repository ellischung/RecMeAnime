import React from 'react';
import AnimeCard from './AnimeCard';
import { GridList } from '@material-ui/core';

const AnimeList = (props) => {
    return (
        // Returns list of anime from search results
        <GridList>
            {props.data.map((anime) => (
                <AnimeCard anime={anime} />
            ))}
        </GridList>
    );
};

export default AnimeList;