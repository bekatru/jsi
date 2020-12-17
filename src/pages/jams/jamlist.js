import React, { useEffect, useState } from "react";
import { LoadData } from "../../js/fetch";
import Jam from "./Jam";

const JamList = (props) => {
  const [jams, setJams] = useState([]);
  const { id, route } = props;

  useEffect(() => {
    LoadData(route, id).then((data) => setJams(data));
  }, [id, route]);

  return jams.map((jam) => (
    <Jam private={props.private} data={jam} key={jam._id} />
  ));
};

export default JamList;
