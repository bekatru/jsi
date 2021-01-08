import React, { useEffect } from "react";
import store from "../../rematch/store";
import Jam from "./Jam";
//Redux
import { useSelector } from "react-redux";

const JamList = (props) => {
  useEffect(() => {
    store.dispatch.data.fetchJamsAsync(props.id);
  }, [props.id]);
  const jams = useSelector((state) => state.data.jams);

  const display = jams ? (
    jams.map((jam) => <Jam private={props.private} data={jam} key={jam._id} />)
  ) : (
    <h1>loading</h1>
  );
  return display;
};

export default JamList;
