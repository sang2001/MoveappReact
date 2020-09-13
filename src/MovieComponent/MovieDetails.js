import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import * as MoviesApi from "../crud/MoviesCrud";



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));


  
export default function MovieDetails(props) {
    const classes = useStyles();
    const imdbID = props.location.state.imdbID;


    const [state, setState] = useState({
       MovieDetails:null
    });
    useEffect(() => {
        console.log(imdbID)
        MoviesApi.getMoviesDetail(imdbID).then((data) => {
     
          
            setState({ ...state, MovieDetails:data.data });
           }).catch((error) => {
               console.log("Error fetching users", error);
           });

    }, []);

    if (!state.MovieDetails) {
        return null;
    }
  return (

  <div>
    
    {console.log(state.MovieDetails[0].stills)}
<GridList cellHeight={160} className={classes.gridList} cols={3}>
    {state.MovieDetails[0].stills.map((tile) => (
      <GridListTile key={tile}>
        <img src={tile} alt={tile} />
      </GridListTile>
    ))}
  </GridList>

    
  </div>
  );

}