import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import MenuSliderDrawer from '@material-ui/core/Drawer';
import { HashLink } from 'react-router-hash-link';
import { 
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Divider,
    List,
    // Typography,
    Box,
    Typography
  } from '@material-ui/core';
  import { 
     Info,
     Home,
     
  } from '@material-ui/icons';
  import MenuIcon from '@material-ui/icons/Menu';
  import MailOutlineIcon from '@material-ui/icons/MailOutline'
  import Avatar from '@material-ui/core/Avatar';
  import avatar from '../avatar.jpg';
 
  
  // CSS styles
  const useStyles= makeStyles (theme=> ({
      menuSliderContainer: {
          width: 250,
          background: '#1C2426',
          height: '100%'
          
      },
      avatar: {
          display: 'block',
          margin: '0.5rem auto',
          width: theme.spacing(14),
          height: theme.spacing(14)
        },
        menuIcon: {
            color: '#fff',
        },
        menuText: {
            color: '#fff'
        },
        penelope: {
        
        }
  }));

const menuItems = [


    {
        listIcon: <Home/>,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <Info />,
        listText: 'Resume',
        listPath: './Resume'
    },
    {
        listIcon: <MailOutlineIcon/>,
        listText: 'Contact',
        listPath: './Contact'
    }
]

const Navbar = () => {
    const [state, setState] = useState ({
        left: false
    })
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      };
    const toggleMenu = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    })
    const classes = useStyles();

    const sideMenu = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component='div'
        onClick={toggleMenu(slider, false)}
        >
            <Avatar className={classes.avatar} alt='pic' src={avatar}/>
            <Divider />
            <List>
                {menuItems.map((listIcon, key) => (
            
                <ListItem button key={key} component={Link} to ={listIcon.listPath}>
                    <ListItemIcon className={classes.menuIcon}>
                        {listIcon.listIcon}
                     </ListItemIcon>
                    <ListItemText className={classes.menuText} primary={listIcon.listText}/>
                    </ListItem>
                    ))}
                
            </List>
        </Box>
    )
    return (
        <>
        
        <Box component='nav'>
            <AppBar position='static' style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleMenu('left', true)}>
                        <MenuIcon style={{color: '#B83D00'}}/>
                    </IconButton>
                  <Typography>Penelope Quirino</Typography>
                    <MenuSliderDrawer
                        anchor='left'
                        open={state.left}
                        onClose={toggleMenu ('left', false)}
                        >
                            {sideMenu('left')}
                    </MenuSliderDrawer>
                </Toolbar>
            </AppBar>

        </Box>
        </>
        
    )
}

export default Navbar;
