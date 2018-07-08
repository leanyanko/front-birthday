import React, { Component } from "react";
import Event from "./Event";

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        There are events:
        {this.props.events
        ? this.props.events.map((event, key) => {
            return <Event event={event} key={key} submitPayment={this.props.submitPayment} />;
        })
        : ""}
      </div>
    );
  }
}

export default AllEvents;
