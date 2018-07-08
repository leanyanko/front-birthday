import React, { Component } from "react";
import "./CreateEvent.css";
import eventService from "../services/eventService";
import rehiveService from "../services/rehiveService";
const defaultNewEvent = {
  title: "",
  description: "",
  date: "2018-07-22",
  address: ""
};

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: Object.assign({}, defaultNewEvent)
    };
    this.postEvent = this.postEvent.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
  }

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions() {
    rehiveService
      .getAll()
      .then(resp => {
        console.log(resp.data);
      })
      .catch(console.error);
  }

  postEvent() {
    const { event } = this.state;

    eventService.addEvent(event);
  }

  inputHandler(property, e) {
    const { event } = this.state;
    event[property] = e.target.value;
    this.setState({ event });
  }

  //https://api.rehive.com/3/user/transactions/ -X GET -H "Authorization: Token 986e3994586c53dbc1c54db0517dca3da528afdfeab289a7f40f835694935e1curl https://api.rehive.com/3/user/transactions/ -X GET -H "Authorization: Token 986e3994586c53dbc1c54db0517dca3da528afdfeab289a7f40f835694935e1a" -H "Content-Type: application/json"

  render() {
    console.log("rendered");
    const { id, title, description, address, date } = this.state.event;
    return (
      <div className="createevent">
        <div className="addform">
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={this.inputHandler.bind(this, "title")}
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>

          <input
            type="text"
            value={description}
            onChange={this.inputHandler.bind(this, "description")}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Description"
          />

          <input
            type="text"
            value={address}
            onChange={this.inputHandler.bind(this, "address")}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Address"
          />

          <div className="form-group">
            <input
              value={date}
              type="date"
              onChange={this.inputHandler.bind(this, "date")}
              className="form-control"
              id="appt-date"
              required
            />
          </div>
          <div className="form-check" />

          <button onClick={this.postEvent} className="btn btn-primary">
            {id ? "Save event" : "Add event"}
          </button>
        </div>
        <button onClick={() => this.props.cancel()}>Cancel</button>
      </div>
    );
  }
}

export default CreateEvent;

//curl https://api.rehive.com/3/admin/transactions/
//-X GET -H
//"Authorization: Token
//986e3994586c53dbc1c54db0517dca3da528afdfeab289a7f40f835694935e1a" -H
//"Content-Type: application/json"
