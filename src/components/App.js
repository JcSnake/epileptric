import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import '../assets/sass/styles.scss';


function App(){
  return (
      <BrowserRouter>
          <Layout>
             <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
              </Switch> 
          </Layout>
          
      </BrowserRouter>
  )
}

export default App;
