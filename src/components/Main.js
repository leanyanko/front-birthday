import React, { Component } from "react";
import "./Main.css";
import eventService from "../services/eventService";
import Login from "./Login"

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
    return <div className="main">Main
    <Login />
    </div>;
  }
}

export default Main;
