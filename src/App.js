// TEST SSH
// Import React
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import CSS
import "./App.css";
import "./css/form.css";
import "./css/layout.css";
// Import Components
import Nav from "./pages/nav/nav";
import Dashboard from "./pages/dashboard/dashboard.js";
import Jams from "./pages/jams/jams";
import JamForm from "./pages/newjam/jamform";
import Login from "./pages/home/home.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwt");
    if (token) {
      await fetch("http://localhost:3001/user/data", {
        method: "get",
        headers: { token: token },
      })
        .then((response) => response.json())
        .then((data) => this.handleLogin(data))
        .catch((err) => console.log(err));
    }
  }

  handleLogin(data) {
    this.setState({
      loggedIn: true,
      user: data,
    });
  }

  handleLogout() {
    localStorage.clear();
    this.setState({
      loggedIn: false,
      user: {},
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav
            handleLogout={this.handleLogout}
            loggedIn={this.state.loggedIn}
          />
          <Switch>
            <Route
              exact
              path={"/login"}
              render={(props) => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedIn={this.state.loggedIn}
                />
              )}
            ></Route>
            <Route
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  user={this.state.user}
                  loggedIn={this.state.loggedIn}
                />
              )}
            ></Route>
            <Route
              path={"/jams"}
              render={(props) => (
                <Jams {...props} loggedIn={this.state.loggedIn} />
              )}
            ></Route>
            <Route
              path="/newjam"
              render={(props) => <JamForm {...props} user={this.state.user} />}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
