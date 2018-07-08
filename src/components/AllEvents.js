import React, { Component } from 'react';
import EventDetail from './EventDetail';

class AllEvents extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.events.map((event, key) => {
          return <EventDetail event={event} key={key} />;
        })}
      </div>
    );
  }
}

export default AllEvents;
