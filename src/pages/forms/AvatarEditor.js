import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";
import Preview from "../../img/image.png";

const AvatarEditor = (props) => {
  const [preview, setPreview] = useState(Preview);
  let src = "";

  useEffect(() => {
    if (props.avatarImage) {
      const image =
        "data:image/png;base64," +
        btoa(String.fromCharCode(...new Uint8Array(props.avatarImage.data)));
      setPreview(image);
    }
  }, [props.avatarImage]);

  //CONVERT BASE64 to Uint8 and SAVE to STATE
  const encodeImage = (data) => {
    const string = data.split(",");
    const bin = Buffer.from(string[1], "base64");
    props.handleAvatar(bin);
  };

  const onCrop = (data) => {
    setPreview(data);
    encodeImage(data);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  return (
    <div className="avatar">
      <img src={preview} height="150" width="150" alt="avatar" />
      <Avatar
        width={390}
        height={295}
        onCrop={(data) => onCrop(data)}
        onBeforeFileLoad={onBeforeFileLoad}
        src={src}
      />
    </div>
  );
};

export default AvatarEditor;
