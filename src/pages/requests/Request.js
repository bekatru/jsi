import React, { useState } from "react";
import Modal from "../general/Modal";
import ProfilePicture from "../profile/ProfilePicture";
import ResponseForm from "../forms/ResponseForm";

const Request = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="request">
      <ProfilePicture fixit={true} diameter={75} input={data.guest.avatar} />
      <div>
        <p>
          {data.guest.name} wants to join {data.jam.title}
        </p>
        <p>{data.message}</p>
        <button onClick={() => setModal(true)}>reply</button>
      </div>
      <Modal show={modal}>
        <ResponseForm id={data._id} />
        <button onClick={() => setModal(false)}>close</button>
      </Modal>
    </div>
  );
};

export default Request;
