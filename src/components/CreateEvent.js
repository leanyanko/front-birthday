import React, { Component } from 'react';
import eventService from '../services/eventService';

const defaultNewEvent = {
  title: '',
  description: '',
  ending: '22-07-2018',
};

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: Object.assign({}, defaultNewEvent),
    };
    this.postEvent = this.postEvent.bind(this);
  }

  postEvent() {
    const { event } = this.state;
    console.log(event);
    eventService.addEvent(event);
  }

  inputHandler(property, e) {
    const { event } = this.state;
    event[property] = e.target.value;
    this.setState({ event });
  }

  render() {
    const { id, title, description, ending } = this.state.event;
    return (
      <div className="createevent">
        <div className="addform">
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={this.inputHandler.bind(this, 'title')}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>

          <input
            type="text"
            value={description}
            onChange={this.inputHandler.bind(this, 'description')}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Description"
          />

          <div className="form-group">
            <input
              value={ending}
              type="date"
              onChange={this.inputHandler.bind(this, 'ending')}
              className="form-control"
              id="appt-date"
              required
            />
          </div>
          <div className="form-check" />

          <button onClick={this.postEvent} className="btn btn-primary">
            {id ? 'Save event' : 'Add event'}
          </button>
        </div>
        <button onClick={() => this.props.cancel()}>Cancel</button>
      </div>
    );
  }
}

export default CreateEvent;
