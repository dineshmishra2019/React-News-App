import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  } from "react-router-dom";

export default class App extends Component {
  

  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
        <Switch>
              <Route path="/"><News key={"general"} pageSize={10} country='in' category='genral'/></Route>
              <Route path="/health"><News key={"health"} pageSize={10} country='in' category='health'/></Route>
              <Route path="/business"><News key={"business"} pageSize={10} country='in' category='business'/></Route>
              <Route path="/sports"><News key={"sports"} pageSize={10} country='in' category='sports'/></Route>
              <Route path="/science"><News key={"science"} pageSize={10} country='in' category='science'/></Route>
              <Route path="/technology"><News key={"technology"} pageSize={10} country='in' category='technology'/></Route>
              <Route path="/entertainment"><News key={"entertainment"} pageSize={10} country='in' category='entertainment'/></Route>
          </Switch>
          
         
          </Router>
      </div>
    )
  }
}


