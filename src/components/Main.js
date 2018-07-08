import React, { Component } from 'react';
import eventService from '../services/eventService';
import Register from './Register';
import Login from './Login';
import CreateEvent from './CreateEvent';
import AllEvents from './AllEvents';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      events: null,
      create: false,
      isValidUser: false,
    };
    this.getEvents = this.getEvents.bind(this);
    this.createClickHandler = this.createClickHandler.bind(this);
    this.cancelCreate = this.cancelCreate.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
    this.isValidUser = this.isValidUser.bind(this);
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

  submitPayment(event) {
    console.log(event);
    eventService
      .updateEvent(event)
      .then(resp => {
        console.log('response--->', resp.data);
        const events = this.state.events;
        const updateEvent = events.map(event => {
          if (event.id === resp.data.id) {
            event.totalGiven = resp.data.totalGiven;
          }

          console.log('event --->', event);
          return event;
        });
        this.setState({
          events: updateEvent,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  isValidUser() {
    this.setState({
      isValidUser: true,
    });
  }

  render() {
    const {
      viewProfile,
      viewBirthdays,
      editProfile,
      createBirthday,
      loginChange,
    } = this.props;
    return (
      <div className="main">
        {!this.state.isValidUser ? (
          loginChange ? (
            <Login isValidUser={this.isValidUser} />
          ) : (
            <Register isValidUser={this.isValidUser} />
          )
        ) : (
          ''
        )}
        {createBirthday ? <CreateEvent cancel={this.cancelCreate} /> : ''}
        {viewBirthdays ? (
          <AllEvents
            events={this.state.events}
            submitPayment={this.submitPayment}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Main;
