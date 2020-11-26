import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { rootStore } from "./Redux";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login/";
import Register from "./Pages/Register/";

class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
