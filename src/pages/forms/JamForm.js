import React from "react";
import { PostRequest, PatchRequest, DeleteRequest } from "../../js/fetch";
import { useForm } from "react-hook-form";

const JamForm = (props) => {
  const { user, location } = props;
  const jamData = location.state ? location.state.data : { null: null };
  const { register, handleSubmit } = useForm({ defaultValues: jamData });

  const onSubmit = (data) => {
    if (jamData._id) {
      PatchRequest("jams/edit", jamData._id, data)
        .then(() => props.history.push("/dashboard"))
        .catch(console.error());
    } else {
      data.name = user.name;
      data.user_id = user._id;
      PostRequest("jams", data)
        .then(() => props.history.push("/dashboard"))
        .catch(console.error());
    }
  };

  const handleDelete = (id) => {
    DeleteRequest(id)
      .then((res) => console.log(res))
      .then(() => props.history.push("/dashboard"))
      .catch(console.error());
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name="title" placeholder="title" />
        <textarea ref={register} name="description" placeholder="descripton" />
        <input ref={register} name="address" placeholder="address" />
        <input ref={register} type="date" name="date" />
        <input ref={register} type="time" name="time" />
        <button>submit</button>
      </form>
      {jamData._id && (
        <button onClick={() => handleDelete(jamData._id)}>delete</button>
      )}
    </div>
  );
};

export default JamForm;
