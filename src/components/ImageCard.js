import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    background: 'rgba(0,0,0,0.8)',
    margin: '20px',
  },
  media: {
    maxHeight: 200,
  },
  title: {
    fontFamily: 'Antonio',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Antonio',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  
    link: {
      fontFamily: 'Antonio',
      fontSize: '.5rem',
      color: '#fff',
  
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardActionArea>
        
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
          size='small' 
          color='primary'
          className='link'
          >
            {place.link}
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}