import React from 'react'
import Header from './Header';
import Projects from './Projects';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpeg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

function Home () {
    const classes = useStyles();
    return (
        <div>
               <div className={classes.root}>
                   <Navbar />
                   <Header />
                   <Projects />

               </div>
    
        </div>
    )
}

export default Home;
