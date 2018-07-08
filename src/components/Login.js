import React, { Component } from "react";
import rehiveService from "../services/rehiveService";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: true
    };
    this.login = this.login.bind(this);
    this.checkHandle = this.checkHandle.bind(this);
    this.register = this.register.bind(this);
  }

  checkHandle() {
    this.setState({ login: !this.state.login });
  }

  register() {
    //placeholder
    const user = {
      first_name: "Joe",
      last_name: "Soap",
      email: "heyhowtorussian@gmail.com",
      company: "superbest",
      password1: "joe1234567",
      password2: "joe1234567",
      terms_and_conditions: true
    };
    //placeholder

    if (!user) return;
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
      user: "mrs.leonenko@gmail.com",
      company: "superbest",
      password: "12345abc"
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
  render() {
    return (
      <div className="Login">
        <input
          type="text"
          value={this.state.user ? this.state.user.username : "username"}
          onChange={this.changeHandler}
        />
        <input
          type="checkbox"
          value={!this.state.login}
          onChange={this.checkHandle}
        />
        <button
          onClick={() => (this.state.login ? this.login() : this.register())}
        >
          {this.state.login ? "Login" : "Register"}
        </button>
      </div>
    );
  }
}

export default Login;
