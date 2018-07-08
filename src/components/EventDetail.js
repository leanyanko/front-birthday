import React, { Component } from 'react';

class EventDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.event.creator.firstName}</p>
        <p>{this.props.event.title}</p>
        <p>{this.props.event.description}</p>
      </div>
    );
  }
}

export default EventDetail;
