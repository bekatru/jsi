import React from "react";
import JamList from "./jamlist";

import "./jams.css";

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
        <JamList loggedIn={this.props.loggedIn} />
      </div>
    );
  }
}

export default Jams;
