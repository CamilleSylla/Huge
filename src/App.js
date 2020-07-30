import React from 'react';
import {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const SignIn = lazy(() => import('./SignIn/SignIn'));
const SignUp = lazy (() => import('./SignUp/SignUp'));
const Dashboard = lazy (() => import('./Dashboard/Dashboard'))

class App extends React.Component {
  constructor () {
    super();
    this.state={
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        email: '',
        joined: '',
        name: ''
      }
    }
  }
  loadUser =(data) => {
    this.setState({user :{
            id: data.id,
            name: data.name,
            email: data.email,
            joined: data.joined
    }})
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn : false})
    } else if (route === 'dashboard') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
  return (
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </Suspense>
    </Router>
  );}
}

export default App;
