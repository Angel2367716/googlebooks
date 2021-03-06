import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render (){
  return (
      <Router>
    <div style={{height:'100%'}}>
      <Nav />
      <Switch>
      <Route exact path="/saved" component={Saved} />
      <Route exact path="/search" component={Search} />
      </Switch>
      <Footer />
    </div>
      </Router>
  );
  }
}

export default App;
