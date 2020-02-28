import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import About from './pages/info/about'
import Privacy from './pages/info/privacy'
import Terms from './pages/info/terms'
import NotFound from './components/404/NotFound.js';

export default () => (
  
  <BrowserRouter>  
    <Navbar/>  
    <Switch>      
      <Route exact path="/" component={Home} />  
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/info/about" component={About} />
      <Route exact path="/info/privacy" component={Privacy} /> 
      <Route exact path="/info/terms" component={Terms} />  
      <Route component={NotFound} />    
    </Switch>
    <Footer/> 
  </BrowserRouter>
  )
