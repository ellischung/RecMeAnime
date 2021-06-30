import React from 'react';
import AnimeRec from './AnimeRec';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

// styling for the grid list from material-ui
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const RecList = (props) => {
    const classes = useStyles();
    
    return (
      // Returns list of anime from recommendations data (individual rec cards)
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5} style={{overflowY: "scroll"}}>
          {props.data !== null &&
            props.data.map((anime) => (
              <AnimeRec key={anime.mal_id} anime={anime} />
            ))
          }
        </GridList>
      </div>
    );
};

export default RecList;