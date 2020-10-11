import React from 'react'

const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const TOKEN_ABI = require('../token-abi.json')
const web3 = new Web3('http://127.0.0.1:9545');
const contract_token = '0x3d7249f2Bb4964e8404054074659397fEAaf4F97';
const privateKey = '82413a9c96c5d8d47179331a59c948fa2bbc9777db683a6778954478bcae9804';
var account;
var point;
const myContract = new web3.eth.Contract(TOKEN_ABI, contract_token, (error, result) => {
    if (error) console.log(error)
})
const ethereum = window.ethereum

export default class MainPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      account: this.props.account,
      point: ''
    }
    this.writeReview = this.writeReview.bind(this)
    this.viewBalance = this.viewBalance.bind(this)
  }

  async writeReview() {
    if (this.state.account != undefined) {
      await myContract.methods.writeReview().send({from: this.state.account});
      myContract.methods.balanceOf(`${this.state.account}`).call((err, result) => {
        if (err) {
          console.log('error')
        } else {
          this.setState({point: result})
        }
      })
      
  }
} 
  viewBalance() {
    myContract.methods.balanceOf(`${this.state.account}`).call((err, result) => {
      if (err) {
        console.log('error')
      } else {
        this.setState({point: result})
      }
    })
    
  }

  componentDidMount() {
  }

    render() {
        return (
            <div>
                <p>hello {this.state.account}</p>
                <button onClick={this.viewBalance}>View Point</button>
                <p>{this.state.point}</p>
                <button onClick={this.writeReview}>Write Review</button>
            </div>
        )
    }
}