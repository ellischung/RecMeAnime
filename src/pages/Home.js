import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../context/search';
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Home.scss';

const Home = () => {
    const history = useHistory();
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');

    // Search functionality 
    const handleSearch = (event) => {
        event.preventDefault();
        search.search(input).then((data) => {
            search.setData(data.results);
            localStorage.setItem('myData', JSON.stringify(data.results));
            history.push('/search');
        });
    };

    return (
        <Grid 
            container 
            direction="column" 
            justify="center" 
            alignContent="center" 
            alignItems="center"
        >
            <Grid item>
                {/* Custom site logo */}
                <Grid item>
                    <img 
                        alt="logo" 
                        src={`${process.env.PUBLIC_URL}/RecMeAnime-Logo.png`} 
                        height={150} 
                        width={700} 
                    />
                </Grid>
                {/* Search bar from material-ui */}
                <Grid item>
                    <form className="home__form">
                        <FormControl type="submit" className="home__formControl">
                            <Input 
                                placeholder="Search for an anime..." 
                                value={input} 
                                onChange={(event) => setInput(event.target.value)}
                                className="home__input" 
                            />
                            <IconButton 
                                variant="contained" 
                                color="primary" 
                                type="submit" 
                                disabled={!input} 
                                onClick={handleSearch}
                                className="home__iconButton"
                            >
                                <SearchIcon/>
                            </IconButton>
                        </FormControl>
                    </form>    
                </Grid>    
            </Grid>
        </Grid>
    );
};

export default Home;