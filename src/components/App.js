import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import '../assets/sass/styles.scss';


function App(){
  return (
      <BrowserRouter>
          <Layout>
             <Switch>
                  <Route exact path="/" component={Home} />
              </Switch> 
          </Layout>
          
      </BrowserRouter>
  )
}

export default App;
