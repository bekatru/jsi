import React from "react";
import { useForm } from "react-hook-form";
import { PatchRequest } from "../../utils/fetch";

const ResponseForm = ({ id }) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    PatchRequest("requests/request", id, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Message:</label>
      <textarea name="remessage" ref={register} />
      <label>
        decline
        <input ref={register} type="radio" name="status" value="declined" />
      </label>
      <label>
        accept
        <input ref={register} type="radio" name="status" value="accepted" />
      </label>
      <button>submit</button>
    </form>
  );
};

export default ResponseForm;
