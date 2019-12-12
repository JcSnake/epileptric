import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Questions from '../pages/Questions';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import '../assets/sass/styles.scss';


function App(){
  return (
      <BrowserRouter>
          <Layout>
             <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/questions" component={Questions} />
                  <Route exact path="/signin" component={SignIn} />
                  <Route exact path="/signup" component={SignUp} />
              </Switch> 
          </Layout>
          
      </BrowserRouter>
  )
}

export default App;
