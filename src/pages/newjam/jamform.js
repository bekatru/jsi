import React from "react";
import DateTimePicker from "react-datetime-picker";
import "./form.css";

class JamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      address: null,
      date: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { title, description, address, date } = this.state;
    fetch("http://localhost:3001/jams", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: this.props.user.name,
        userId: this.props.user._id,
        title: title,
        description: description,
        address: address,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1>NEW JAM</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="title"
            type="text"
            name="title"
          />
          <textarea
            onChange={this.handleChange}
            rows="15"
            placeholder="description..."
            type="text"
            name="description"
          />
          <input
            onChange={this.handleChange}
            placeholder="address"
            type="text"
            name="address"
          />
          <DateTimePicker
            showLeadingZeros={true}
            yearAriaLabel="year"
            monthPlaceholder="MM"
            yearPlaceholder="YY"
            dayPlaceholder="DD"
            hourPlaceholder="hh"
            minutePlaceholder="mm"
            disableClock={true}
            onChange={(value) => this.setState({ date: value })}
            value={this.state.date}
          />
          <button type="submit">JAM</button>
        </form>
      </div>
    );
  }
}

export default JamForm;
