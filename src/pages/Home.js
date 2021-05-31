import React, { useContext } from 'react';
import { SearchContext } from '../context/search';

const Home = () => {
    const search = useContext(SearchContext)

    return (
        <div>
            Home
        </div>
    );
};

export default Home;