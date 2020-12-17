import React from "react";
import { useForm } from "react-hook-form";

const SignUp = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.handleAuth("user/register", data);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} name="name" placeholder="name" />
      <input ref={register} name="email" placeholder="email" />
      <input
        ref={register}
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        ref={register}
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
      />
      <button>submit</button>
    </form>
  );
};

export default SignUp;
