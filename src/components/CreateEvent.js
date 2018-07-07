import React, { Component } from "react";
import "./CreateEvent.css";
import eventService from "../services/eventService";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEvent: null
    };
    this.postEvent = this.postEvent.bind(this);
  }

  postEvent() {
    const event = this.state.newEvent;

    eventService.postEvent;
  }

  render() {
    console.log("rendered");
    return (
      <div className="createevent">
        CREATE FORM
        <button onClick={() => this.props.cancel()}>Cancel</button>
      </div>
    );
  }
}

export default CreateEvent;
