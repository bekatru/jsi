// Components
import React from "react";
// import icons
import JamList from "../jams/JamList";
import ProfileCard from "./ProfileCard";

const PublicProfile = (props) => {
  const { id } = props.location.state;

  return (
    <div className="container profile">
      <ProfileCard id={id} />
      <JamList route={"jams/user?id="} id={id} guest={true} />
    </div>
  );
};

export default PublicProfile;
