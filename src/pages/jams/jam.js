import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import RequestForm from "../forms/RequestForm";
import Modal from "../general/Modal";

const Jam = (props) => {
  const [modal, setModal] = useState(false);
  const { name, title, description, address, date, time, user_id } = props.data;
  return (
    <div className="jam">
      <Link
        to={{
          pathname: "/profile",
          state: { id: user_id },
        }}
      >
        <p>{name}</p>
      </Link>
      <p>{title}</p>
      <p>{description}</p>
      <p>{address}</p>
      <p>{date}</p>
      <p>{time}</p>
      {props.private ? (
        <Link
          to={{
            pathname: "/jams/create",
            state: { data: props.data },
          }}
        >
          <button>Edit</button>
        </Link>
      ) : (
        <button onClick={() => setModal(true)}>Join</button>
      )}
      <Modal show={modal}>
        <RequestForm data={props.data} hide={() => setModal(false)} />
      </Modal>
    </div>
  );
};

export default Jam;
