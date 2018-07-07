import React, { Component } from "react";
import "./Main.css";
import eventService from "../services/eventService";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      events: null
    };
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents() {
    eventService
      .getAll()
      .then(resp => {
        console.log(resp.data);
        this.setState({ events: resp.data });
      })
      .catch(console.error);
  }

  render() {
    return <div className="main">Main</div>;
  }
}

export default Main;
