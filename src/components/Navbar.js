import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, InputBase, fade, makeStyles } from '@material-ui/core';
import { SearchContext } from '../context/search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const history = useHistory(); 
  const search = useContext(SearchContext);
  const [input, setInput] = useState('');

  // handle search results made from the top navbar; redirects to home
  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
      search.setData(data.results);
      localStorage.setItem('myData', JSON.stringify(data.results));
      setInput('');
      history.push('/');
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: '#a9b2c2'}}>
          <Link to="/" className={classes.title}>
            <img 
              alt="logo" 
              src={`${process.env.PUBLIC_URL}/RecMeAnime-Logo.png`} 
              height={50}
              width={225}
              style={{marginTop: '15px'}} 
            />
          </Link>
          <form className={classes.search} onSubmit={handleSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}