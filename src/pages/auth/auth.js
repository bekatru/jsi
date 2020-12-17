import React from "react";
import SignIn from "../forms/AuthForm_login";
import SignUp from "../forms/AuthForm_register";
import { PostRequest } from "../../js/fetch";

const Auth = (props) => {
  const handleAuth = (route, data) => {
    PostRequest(route, data).then((response) => {
      if (response.user) {
        const { user, token } = response;
        localStorage.setItem("jwt", token);
        props.handleLogin(user);
        props.history.push("/dashboard");
      } else {
        console.log(response);
      }
    });
  };

  return (
    <>
      <SignIn handleAuth={(route, data) => handleAuth(route, data)} />
      <SignUp handleAuth={(route, data) => handleAuth(route, data)} />
    </>
  );
};

export default Auth;
