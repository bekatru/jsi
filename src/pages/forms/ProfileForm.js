import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PatchRequest } from "../../utils/fetch";
import AvatarEditor from "./AvatarEditor";

const ProfileForm = (props) => {
  const userData = props.user;
  const { register, handleSubmit } = useForm({ defaultValues: userData });
  const [avatar, setAvatar] = useState("");
  const id = props.user._id;

  const onSubmit = (data) => {
    data.avatar = avatar;
    console.log(data);
    PatchRequest("user/update", id, data)
      .then((data) => props.updateUser(data))
      .then(() => props.history.push("/dashboard"))
      .catch(console.error());
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AvatarEditor
          avatarImage={userData.avatar}
          handleAvatar={(data) => setAvatar(data)}
        />
        <input ref={register} placeholder="name" name="name" />
        <textarea ref={register} rows="5" placeholder="bio..." name="bio" />
        <input ref={register} placeholder="facebook" name="facebook" />
        <input ref={register} placeholder="instagram" name="instagram" />
        <input ref={register} placeholder="phone" name="phone" />
        <button type="submit">JAM</button>
      </form>
    </div>
  );
};

export default ProfileForm;
