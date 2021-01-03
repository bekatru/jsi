import React, { useEffect, useState } from "react";
import { LoadData } from "../../utils/fetch";
import ProfilePicture from "../profile/ProfilePicture";

const ResponseList = () => {
  const [res, setRes] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    LoadData("requests/res?id=", id)
      .then((res) => setRes(res))
      .catch((err) => console.log(err));
  }, [id]);

  const responses = res.map((item) => (
    <div key={item._id}>
      <ProfilePicture fixit={true} input={item.host.avatar} diameter={75} />
      <p>
        {item.host.name} {item.status} your request to join {item.jam.title}
      </p>
      <p>{item.remessage}</p>
    </div>
  ));

  return responses;
};

export default ResponseList;
