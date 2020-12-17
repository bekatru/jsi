import React from "react";
import mozart from "../../img/image.png";

const ProfilePicture = (props) => {
  const { input, diameter } = props;
  const image = !input
    ? mozart
    : "data:image/png;base64," +
      btoa(String.fromCharCode(...new Uint8Array(input.data)));
  return <img src={image} width={diameter} heigth={diameter} alt="avatar" />;
};

export default ProfilePicture;
