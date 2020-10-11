import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js'
import Landing from './components/landing.js'
import  { Route, BrowserRouter, Switch} from 'react-router-dom'
import MainPost from './components/mainPost'

const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const TOKEN_ABI = require('./token-abi.json')
const web3 = new Web3('http://127.0.0.1:9545');
const contract_token = '0xBe2f6BC641c60ADeAFFC6CBD06e73BF7EaaF7DCD';
const privateKey = '77f62bce95daa7c58b33290bf9e54c9f15bc21cb7827a731e77fbeaa471a9642';
var account;
var point;
const myContract = new web3.eth.Contract(TOKEN_ABI, contract_token, (error, result) => {
    if (error) console.log(error)
})

const ethereum = window.ethereum

export default class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    account: '',
    point: ''
    }
  this.handler = this.handler.bind(this)
}

handler() {
  // web3.eth.getAccounts( (err,result) => {
  //   if (err) {
  //     console.log('error')
  //   } else {
  //     this.setState({username: result[0]})
  //     console.log(result)
  //   }
  // } )

}

componentDidMount() {
  ethereum.on('accountsChanged', (accounts) => {
    this.setState({account: accounts[0]})
    console.log(accounts[0])
  })
} 

render() {
  const a = 'sax'
  return (

    <div className="App">
      <div>
        <main>
        <BrowserRouter>
        <header>
          <Nav account={this.state.account} point={this.state.point} />
        </header>
          <Switch>
            <Route exact path="/" >
                <Landing handler={this.handler}/>
              </Route>
            <Route exact path="/main">
                <MainPost account={this.state.account} />
            </Route>
          </Switch>
       
            </BrowserRouter>
        </main>
      </div>
    </div>

  );
}
}
