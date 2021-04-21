import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  
  return (
    <>

    <CssBaseline />


    <Route path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/resume' component={Resume} />

    
    
 
    </>
  );
}

export default App;
