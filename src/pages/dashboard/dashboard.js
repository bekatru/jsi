import React from "react";
import JamList from "../jams/jamlist.js";

function Dashboard(props) {
  return (
    <div className="container">
      <JamList dashboard={true} loggedIn={props.loggedIn} />
    </div>
  );
}

export default Dashboard;
