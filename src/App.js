import React from 'react';
import {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const SignIn = lazy(() => import('./SignIn/SignIn'));
const SignUp = lazy (() => import('./SignUp/SignUp'));

class App extends React.Component {
  constructor () {
    super();
    this.state={
      route: 'signin',
      isSignedIn: false
    }
  }

  render() {
  return (
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Suspense>
    </Router>
  );}
}

export default App;
