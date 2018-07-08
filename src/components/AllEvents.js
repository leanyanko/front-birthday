import React, { Component } from "react";
import EventDetail from "./EventDetail";

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.events
          ? this.props.events.map((event, key) => {
              return (
                <EventDetail
                  event={event}
                  key={key}
                  submitPayment={this.props.submitPayment}
                />
              );
            })
          : ""}
      </div>
    );
  }
}

export default AllEvents;
