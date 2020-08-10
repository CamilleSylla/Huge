import React from 'react';
import {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import initialState from './state'

const SignIn = lazy(() => import('./SignIn/SignIn'));
const SignUp = lazy (() => import('./SignUp/SignUp'));
const Home = lazy (() => import('./Home/home'));
const Dashboard = lazy (() => import('./Dashboard/Dashboard'));





class App extends React.Component {
  constructor (props) {
    super(props);
    this.state=initialState;
  }
  loadUser = (data) => {
    this.setState({user :{
            id: data.id,
            nom: data.nom,
            prenom: data.prenom,
            email: data.email
    }})
  }

  render() {
  return (
    <Router>
    <Suspense fallback={<div>Chargement...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Suspense>
  </Router>
  );}
}

export default App;
