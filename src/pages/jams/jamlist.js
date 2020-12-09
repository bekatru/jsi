import React from "react";
import Jam from "./jam";
import { Link } from "react-router-dom";

class JamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jams: [],
    };
    this.LoadJams = this.LoadJams.bind(this);
  }

  componentDidMount() {
    this.LoadJams();
  }

  // Load Jams
  async LoadJams() {
    const query = this.props.dashboard
      ? "/user?id=" + localStorage.getItem("userId")
      : "";
    const url = "http://localhost:3001/jams" + query;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ jams: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const jams = this.state.jams;
    return (
      <div>
        {this.props.loggedIn ? (
          <Link to="/newjam">
            <div className="new">+</div>
          </Link>
        ) : (
          <Link to="/">
            <div className="new auth">log In to create a new jam</div>
          </Link>
        )}
        {jams.map((item, index) => {
          return (
            <Jam
              id={item._id}
              key={index}
              name={item.name}
              title={item.title}
              date={item.date}
              address={item.address}
              description={item.description}
              editable={this.props.dashboard}
            />
          );
        })}
      </div>
    );
  }
}

export default JamList;
