import React from "react";
import { useForm } from "react-hook-form";
import { PostRequest } from "../../utils/fetch";

const JoinJam = (props) => {
  const { user_id, _id, title } = props.data;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.host_id = user_id;
    data.guest_id = localStorage.getItem("id");
    data.jam = _id;
    PostRequest("requests", data)
      .then((response) => console.log(response))
      .catch(console.error());
  };

  return (
    <div className="modal-main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Join {title}</p>
        <label>Leave a message</label>
        <textarea name="message" ref={register} rows="5" />
        <button type="submit">send</button>
      </form>
      <button onClick={() => props.hide()}>cancel</button>
    </div>
  );
};

export default JoinJam;
