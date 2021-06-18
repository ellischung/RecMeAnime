import React, { useEffect, useContext } from 'react';
import { SearchContext } from '../context/search';

const Results = () => {
    const search = useContext(SearchContext);

    useEffect(() => {
        console.log(search.singleData);
    }, [search]);

    return (
        <div>
            Results
        </div>
    );
};

export default Results;