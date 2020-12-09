import React from "react";
import { Link } from "react-router-dom";

class Jam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  formatDate = (date) => {
    const d = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [month, day, hour, mins] = [
      monthNames[d.getMonth()],
      d.getDay(),
      d.getHours() < 10 ? "0" + d.getHours() : d.getHours(), //adding leading zeros to display | Yeah, gotta DRY
      d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(), // I will keep it like this tho
    ];

    return month + " " + day + " | " + hour + ":" + mins;
  };

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  handleDelete(id) {
    fetch("http://localhost:3001/jams/delete?id=" + id, {
      method: "delete",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(console.error());
  }

  render() {
    const { title, date, address, name, description, id } = this.props;
    return (
      <div className="jam">
        <div onClick={(e) => this.togglePanel(e)} className="header">
          <div>
            <h2 className="title">{title}</h2>
            <p className="date">{this.formatDate(date)}</p>
          </div>
          <div>
            <p className="address">{address}</p>
            <p className="name">{name}</p>
          </div>
        </div>
        {this.state.open ? (
          <div className="content">
            <p className="description">{description}</p>
            {this.props.editable ? (
              <div>
                <button onClick={() => this.handleDelete(id)}>Delete</button>
                <Link to="/newjam">
                  <button>Edit</button>
                </Link>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Jam;
