import React, { Component } from "react";
import Auth from "../auth/auth.js";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="container">
        <Auth handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
