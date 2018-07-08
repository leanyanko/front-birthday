import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EventDetail from "./EventDetail";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Event extends Component {
  constructor() {
    super();
    this.state = {
      details: false
    };

    this.closeDetail = this.closeDetail.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  closeDetail() {
    this.setState({ details: false });
  }

  showDetails() {
    this.setState({ details: true });
  }

  render() {
    const { classes, event } = this.props;
    const { details } = this.state;
    console.log("detail? ", details);
    console.log(event);
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {event.title}
          </Typography>
          <Typography component="p">{event.description}</Typography>
          <Typography component="p">
            {event.creator ? event.creator.firstName : ""}
          </Typography>
          <Typography component="p">
            Total amount donated: {event.totalGiven}
          </Typography>
          <button onClick={this.showDetails}>Details</button>
          {details ? (
            <EventDetail event={event} close={this.closeDetail} />
          ) : (
            ""
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Event);
