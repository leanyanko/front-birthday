import React, { Component } from 'react';
import rehiveService from '../services/rehiveService';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
  first_name: 'Joe',
  last_name: 'Soap',
  email: 'heyhowtorussian@gmail.com',
  company: 'superbest',
  password1: 'joe1234567',
  password2: 'joe1234567',
  terms_and_conditions: true,
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
    this.register = this.register.bind(this);
  }

  checkHandle() {
    this.setState({ login: !this.state.login });
  }

  register() {
    const user = this.state.user;
    console.log(user);
    rehiveService
      .register(user)
      .then(resp => {
        console.log(resp);
        this.setState({ currentUser: resp.data.data.data.user });
      })
      .catch(console.error);
  }

  login() {
    //const { user } = this.state;

    //placeholder
    const user = {
      user: 'mrs.leonenko@gmail.com',
      company: 'superbest',
      password: '12345abc',
    };
    //placeholder

    if (!user) return;
    rehiveService
      .login(user)
      .then(resp => {
        console.log(resp.data.data);
        //this.setState({ currentUser: resp.data.data.data.user });
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
      first_name,
      last_name,
      email,
      company,
      password1,
      password2,
    } = this.props;
    return (
      <Grid>
        <Grid item xs={12}>
          <Grid container justify={'center'}>
            <Typography variant="headline" component="h3">
              Welcome back!
            </Typography>
          </Grid>
          <Grid container className={classes.root} justify={'center'}>
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
              value={password1}
              onChange={this.inputHandler.bind(this, 'password1')}
              className={classes.textField}
              placeholder="Password"
            />
          </Grid>
          <Grid container className={classes.root} justify={'center'}>
            <Button
              onClick={this.register}
              variant="contained"
              justify={'flex-end'}
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
