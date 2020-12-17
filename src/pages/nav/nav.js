import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="lg">
        <h1>JAM SESSIONS</h1>
        <h2>Istanbul</h2>
      </div>
      <div className="nav">
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/jams">Jams</Link>
        </ul>
        {this.props.loggedIn ? (
          <ul className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link onClick={this.props.handleLogout} to="/">
              Sign Out
            </Link>
          </ul>
        ) : (
          <ul className="nav-links">
            <Link to="/auth">Sign In</Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
