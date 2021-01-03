import React from "react";
import JamList from "../jams/JamList";
import ProfileCard from "../profile/ProfileCard";
import { Link } from "react-router-dom";
import RequestList from "../requests/RequestList";
import ResponseList from "../requests/ResponseList";

function Dashboard(props) {
  return (
    <div className="container">
      <ResponseList />
      <Link to="/profile/edit">
        <button>edit</button>
      </Link>
      <ProfileCard data={props.user} />
      <RequestList />
      <Link to="/jams/create">
        <div className="new">+</div>
      </Link>
      <JamList route={"jams/user?id="} id={props.user._id} private={true} />
    </div>
  );
}

export default Dashboard;
