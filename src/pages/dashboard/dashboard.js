import React from "react";
import JamList from "../jams/JamList";
import ProfileCard from "../profile/ProfileCard";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <div className="container">
      <Link to="/profile/edit">
        <button>edit</button>
      </Link>
      <ProfileCard data={props.user} />
      <Link to="/jams/create">
        <div className="new">+</div>
      </Link>
      <JamList route={"jams/user?id="} id={props.user._id} private={true} />
    </div>
  );
}

export default Dashboard;
