import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{height:'100%'}}>
      <Nav />
      <Router>
      <Switch>
      <Route exact path="/saved" component={Saved} />
      <Route exact path="/search" component={Search} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
