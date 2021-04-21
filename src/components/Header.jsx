import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';



// CSS styles with makeStyles
const useStyles = makeStyles (theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundRepear: 'no-repeat',
        backgroundSize: 'cover',
        
    },

    icon: {
        color: '#B83D00',
        fontSize: '3rem',

    },

    colorText: {
        color: '#B83D00',
    },

    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontFamily: 'Abril Fatface',
        fontSize: '5rem',
    },
    
    goDown: {
        color: '#B83D00',
        fontSize: '6rem',
    },
}));

function Header () {
    const classes = useStyles ();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    
    return (
        <>
        <Box component='div' className={classes.root} id='header'>
           <Collapse 
           in={checked}
           {...(checked ? { timeout: 1000 } : {})} 
           collapsedHeight={50}
           >
            <Box className={classes.container}>
                <h1 className={classes.title}>
                    a creative<span className={classes.colorText}>portfolio</span>
                </h1>
                <Scroll to='project-cards' smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
            </Box>
           </Collapse>
        </Box>
        </>
    );
}

export default Header;
