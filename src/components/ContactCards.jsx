import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import contactdata from '../static/contactdata';
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
    <div className={classes.root} id="contact-cards">
      <ImageCard place={contactdata[0]} checked={checked} />
      <ImageCard place={contactdata[1]} checked={checked} />
      
      
    </div>
  );
}