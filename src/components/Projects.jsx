import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import projectdata from '../static/projectdata';
import windowPos from '../hook/windowPos';

const useStyles = makeStyles ((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function Projects () {
  const classes = useStyles();
  const checked = windowPos('header');
  return (
    <div className={classes.root} id="project-cards">
      <ImageCard place={projectdata[0]} checked={checked} />
      <ImageCard place={projectdata[1]} checked={checked} />
      <ImageCard place={projectdata[2]} checked={checked} />
      <ImageCard place={projectdata[3]} checked={checked} />
      <ImageCard place={projectdata[4]} checked={checked} />
      <ImageCard place={projectdata[5]} checked={checked} />
      
    </div>
  );
}
   