import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../context/search';
import { FormControl, Input, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AnimeList from '../components/AnimeList';
import './Home.scss';

const Home = () => {
    const history = useHistory();
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');
    const [dataExists, setDataExists] = useState(true);

    // Constantly checks to see if anime data exists
    // Pull from local storage if it doesn't exist; if none from local storage, log error
    useEffect(() => {
        if (search.animeData === undefined /*|| search.animeData.length === 0*/) {
            try {
                search.setData(JSON.parse(localStorage.getItem('myData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
    }, [search]);

    // Search functionality 
    const handleSearch = (event) => {
        event.preventDefault();
        // alert error message and return if input length is less than 3
        if (input.length < 3) {
            alert("Search input must be at least 3 characters!");
            return;
        }
        search.search(input).then((data) => {
            search.setData(data.data);
            localStorage.setItem('myData', JSON.stringify(data.data));
            history.push('/recmeanime');
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
            {/* Grid item for site logo + search bar */}
            <Grid item>
                {/* Custom site logo */}
                <Grid item>
                    <img 
                        alt="logo" 
                        src={`${process.env.PUBLIC_URL}/watching-anime.gif`} 
                        height={250} 
                        width={500} 
                        style={{marginTop: '20px'}}
                    />
                </Grid>
                {/* Search bar from material-ui */}
                <Grid item>
                    <form className="home__form">
                        <FormControl type="submit" className="home__formControl">
                            <Input 
                                placeholder="Search for any anime!" 
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
            {/* Display search results (limit card components to 20) */}
            <Grid container style={{marginTop: '10px'}}>
                {dataExists && <AnimeList data={search.animeData} />}
            </Grid> 
        </Grid>
    );
};

export default Home;