import React, { Component } from 'react';
import eventService from '../services/eventService';
import Login from './Login';
import CreateEvent from './CreateEvent';
import AllEvents from './AllEvents';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      events: null,
      create: false,
    };
    this.getEvents = this.getEvents.bind(this);
    this.createClickHandler = this.createClickHandler.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
  }

  componentDidMount() {
    this.getEvents();
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

  createClickHandler() {
    this.setState({ create: true });
  }

  cancelCreate() {
    this.setState({ create: false });
  }

  render() {
    const {
      viewProfile,
      viewBirthdays,
      editProfile,
      createBirthday,
    } = this.props;
    return (
      <div className="main">
        <Login />
        {createBirthday ? <CreateEvent cancel={this.cancelCreate} /> : ''}
        {viewBirthdays ? <AllEvents events={this.state.events} /> : ''}
      </div>
    );
  }
}

export default Main;
