import React from "react";
import { Link } from "react-router-dom";

const Jam = (props) => {
  const { name, title, description, address, date, time } = props.data;

  return (
    <div className="jam">
      <p>{name}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{address}</p>
      <p>{date}</p>
      <p>{time}</p>
      <Link
        to={{
          pathname: "/jams/create",
          state: { data: props.data },
        }}
      >
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Jam;
