// Import React
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import CSS
import "./App.css";
import "./css/form.css";
import "./css/layout.css";
import "./css/profile.css";
import "./css/jams.css";
import "./css/nav.css";
// Import Components
import Nav from "./pages/general/Nav";
import Dashboard from "./pages/dashboard/Dashboard";
import Jams from "./pages/jams/Jams";
import JamForm from "./pages/forms/JamForm";
import Auth from "./pages/auth/Auth.js";
import ProfileForm from "./pages/forms/ProfileForm";
import PublicProfile from "./pages/profile/PublicProfile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSession = this.handleSession.bind(this);
  }

  componentDidMount() {
    this.handleSession();
  }

  handleSession() {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetch("http://localhost:3001/user/data", {
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
            {/* {AUTH} */}
            <Route
              exact
              path={"/auth"}
              render={(props) => (
                <Auth {...props} handleLogin={this.handleLogin} />
              )}
            ></Route>
            {/* {DASH} */}
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
            {/* {JAMS} */}
            <Route
              exact
              path={"/jams"}
              render={(props) => (
                <Jams {...props} loggedIn={this.state.loggedIn} />
              )}
            ></Route>
            {/* {CREATE JAM} */}
            <Route
              exact
              path="/jams/create"
              render={(props) => <JamForm {...props} user={this.state.user} />}
            ></Route>
            {/* {EDIT PROFILE} */}
            <Route
              exact
              path="/profile/edit"
              render={(props) => (
                <ProfileForm
                  {...props}
                  updateUser={this.handleLogin}
                  user={this.state.user}
                />
              )}
            ></Route>
            {/*PROFILE*/}
            <Route path="/profile" component={PublicProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
