import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 0 && value <= 32) {
      this.setState({ numberOfEvents: value, ErrorText: "" });
    } else {
      this.setState({ ErrorText: "Please select a number from 1 to 32." });
    }
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>
          <b>Number of Events:</b>
        </p>
        <input
          type="text"
          id="events-number"
          className="number-of-events"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.ErrorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
