import React from "react";
import JamList from "./JamList";

class Jams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>JAMS</h1>
        <JamList route="jams/" id="" />
      </div>
    );
  }
}

export default Jams;
