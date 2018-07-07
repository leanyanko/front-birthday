import React, { Component } from "react";
import StellarSdk from "stellar-sdk";

import request from "request";

class Payments extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleFillForm = this.handleFillForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleCreateWallet = this.handleCreateWallet.bind(this);
    this.createWallet = this.createWallet.bind(this);
    this.checkBalance = this.checkBalance.bind(this);
  }

  handleFillForm(e) {
    e.preventDefault();
    switch (e.target.name) {
      case "pubKey":
        this.setState({
          valuePubKey: e.target.value
        });
        break;
      case "amount":
        this.setState({
          valueAmount: e.target.value
        });
        break;
      case "currency":
        this.setState({
          valueCurrency: e.target.value
        });
        break;
      case "portion":
        this.setState({
          valuePortion: e.target.value
        });
        break;
      default:
        0;
    }
  }

  handleSubmitForm(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  createWallet(Keypair) {
    request.get(
      {
        url: "https://friendbot.stellar.org",
        qs: { addr: Keypair.publicKey() },
        json: true
      },
      (error, response, body) => {
        error || response.statusCode !== 200
          ? console.error("something went wrong", body || error)
          : console.log("WALLET CREATED SUCCESSFULLY! \n", body);
      }
    );
  }

  checkBalance(secret) {
    var pair = StellarSdk.Keypair.fromSecret(secret);
    var server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
    server.loadAccount(pair.publicKey()).then(account => {
      console.log("Balances for account: " + pair.publicKey());
      account.balances.forEach(balance => {
        console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
        this.setState({
          simpleBalance: balance.balance
        });
      });
    });
  }

  async handleCreateWallet(e) {
    try {
      if (process.env.REACT_APP_SECRET !== undefined) {
        const balance = await this.checkBalance(process.env.REACT_APP_SECRET);
      } else {
        const keyPair = await StellarSdk.Keypair.random();
        const newWallet = await this.createWallet(keyPair);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return <div />;
  }
}

export default Payments;
