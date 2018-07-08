import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import rehiveService from "../services/rehiveService";

const styles = theme => ({
  root: {
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
});

const defaultNewUser = {
  email: 'heyhowtorussian@gmail.com',
  password1: 'joe1234567',
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      user: Object.assign({}, defaultNewUser),
    };
    this.login = this.login.bind(this);
    this.checkHandle = this.checkHandle.bind(this);
  }

  checkHandle() {
    this.setState({ login: !this.state.login });
  }

  login() {
    const { user } = this.state;

    //placeholder
    // const user = {
    //   user: 'mrs.leonenko@gmail.com',
    //   company: 'superbest',
    //   password: '12345abc',
    // };
    //placeholder

    if (!user) return;
    rehiveService
      .login(user)
      .then(resp => {
        console.log(resp.data.data);
        this.setState({ currentUser: resp.data.data.user });
        this.props.isValidUser();
      })
      .catch(console.error);
  }

  inputHandler(property, e) {
    const { user } = this.state;
    user[property] = e.target.value;
    this.setState({ user });
  }

  render() {
    const {
      classes,
      email,
      password,
    } = this.props;
    return (
      <Grid>
        <Grid item xs={12}>
          <Grid container justify={'center'}>
            <Typography variant="headline" component="h3">
              Welcome back!
            </Typography>
          </Grid>
          <Grid container className={classes.root} justify={"center"}>
            <TextField
              id="required"
              value={email}
              onChange={this.inputHandler.bind(this, 'email')}
              className={classes.textField}
              placeholder="Email"
            />
          </Grid>
          <Grid container className={classes.root} justify={'center'}>
            <TextField
              id="password"
              value={password}
              onChange={this.inputHandler.bind(this, "password")}
              className={classes.textField}
              placeholder="Password"
            />
          </Grid>
          <Grid container className={classes.root} justify={"center"}>
            <Button
              onClick={this.login}
              variant="contained"
              justify={"flex-end"}
            >
              Log In!
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Register);
