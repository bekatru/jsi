// Components
import React, { useEffect, useState } from "react";
import { LoadData } from "../../js/fetch";
import ProfilePicture from "./ProfilePicture";

// Icons
import facebook_icon from "../../icons/facebook.png";
import instagram_icon from "../../icons/instagram.png";
import mail_icon from "../../icons/mail.png";
import whatsapp_icon from "../../icons/whatsapp.png";

const ProfileCard = (props) => {
  const [user, setUser] = useState({});
  const { id, data } = props;
  const { name, bio, avatar } = user;

  useEffect(() => {
    data
      ? setUser(data)
      : LoadData("profile?id=", id).then((data) => setUser(data));
  }, [id, data]);

  return (
    <div className="container profile">
      <ProfilePicture input={avatar} diameter={150} />
      <h2>{name}</h2>
      <ul className="some">
        <li>
          <img src={mail_icon} alt="mail" />
        </li>
        <li>
          <img src={facebook_icon} alt="facebook" />
        </li>
        <li>
          <img src={instagram_icon} alt="instagram" />
        </li>
        <li>
          <img src={whatsapp_icon} alt="whatsapp" />
        </li>
      </ul>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
