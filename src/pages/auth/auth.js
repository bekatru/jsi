import React, { Component } from "react";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "login",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.switchAuth = this.switchAuth.bind(this);
  }

  switchAuth() {
    if (this.state.type === "register") {
      return this.setState({ type: "login" });
    } else {
      return this.setState({ type: "register" });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { name, email, password, confirmPassword } = this.state;
    const authSchema =
      this.state.type === "login"
        ? {
            email: email,
            password: password,
          }
        : {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          };

    fetch("http://localhost:3001/user/" + this.state.type, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(authSchema),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user && data.token) {
          this.props.handleSuccessfulAuth(data);
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("userId", data.user._id);
        }
      })
      .catch((error) => console.log(error));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.type === "register" ? (
            <input //name
              type="name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          ) : null}
          <input //email
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input //password
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          {this.state.type === "register" ? (
            <input // password confirm
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          ) : null}
          <button className="submit" type="submit">
            {this.state.type}
          </button>
        </form>
        <p onClick={this.switchAuth}>
          {this.state.type === "login" ? "Register" : "Log In"}
        </p>
      </div>
    );
  }
}
