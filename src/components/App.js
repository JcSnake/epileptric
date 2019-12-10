import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import '../assets/sass/styles.scss';


function App(){
  return (
      <BrowserRouter>
          <Layout>
             <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signin" component={SignIn} />
                  <Route exact path="/signup" component={SignUp} />
              </Switch> 
          </Layout>
          
      </BrowserRouter>
  )
}

export default App;
