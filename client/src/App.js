import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form/Form';
import SubPage from  './SubPage/SubPage';

let body = {};

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tweets: [],
      isForm: true,
      isResults: false
    }

    this.pageStateHandler = this.pageStateHandler.bind(this);
    this.tweetStateHandler = this.tweetStateHandler.bind(this);
  }

  pageStateHandler() {
    
    this.setState({
      isForm: !this.state.isForm,
      isResults: !this.state.isResults,
    });
  }

  tweetStateHandler(tweets) {
    this.setState({tweets: tweets});
  }

  render() {

    if(this.state.isForm) {
      body = <Form 
        pageStateHandler = {this.pageStateHandler}
        tweetStateHandler = {this.tweetStateHandler}
        />
    }

    if(this.state.isResults){
      body = <SubPage 
        pageStateHandler = {this.pageStateHandler}
        tweetStateHandler = {this.tweetStateHandler}
        tweets = {this.state.tweets}/>
    }

    return (


      <div className="App">
        <h1> Poetwee </h1>
        {body}
      
      </div>
     
    );
  }
}

export default App;
