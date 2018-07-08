import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class EventDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes, event } = this.props;
    console.log(event);
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {event.title}
          </Typography>
          <Typography component="p">{event.description}</Typography>
          <Typography component="p">
            {event.creator.firstName}
          </Typography>
          <Typography component="p">
            Total amount donated: {event.totalGiven}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(EventDetail);
