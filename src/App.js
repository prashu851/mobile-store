import React from 'react';
import './App.css';
import Mobiles from './components/Mobiles';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
  render(){
    console.log("Working")
  return (
        <Router>
          <NavBar />
          <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route path="/mobiles">
                  <Mobiles />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
            </Switch>
          </Router>
  );
  }
}

export default App;
