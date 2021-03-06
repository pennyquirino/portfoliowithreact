import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactCards from './ContactCards';



// CSS styles with makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpeg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

function Contact () {
    const classes = useStyles();
    return (
        <div id='contact'>
               <div className={classes.root}>
               
                   <ContactCards />

               </div>
    
        </div>
    )
}

export default Contact;