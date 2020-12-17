import React from "react";
import { useForm } from "react-hook-form";

const SignIn = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.handleAuth("user/login", data);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} name="email" placeholder="email" />
      <input
        ref={register}
        type="password"
        name="password"
        placeholder="password"
      />
      <button>submit</button>
    </form>
  );
};

export default SignIn;
