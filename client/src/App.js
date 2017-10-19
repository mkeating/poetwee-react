import React, { Component } from 'react';

import Form from './Form/Form';
import SubPage from  './SubPage/SubPage';

let body = {};

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tweets: [],
      isForm: true,
      isResults: false,
      isLoading: false
    }

    this.pageStateHandler = this.pageStateHandler.bind(this);
    this.tweetStateHandler = this.tweetStateHandler.bind(this);
    this.loadingStateHandler = this.loadingStateHandler.bind(this);
  }

  pageStateHandler() {
    
    this.setState({
      isForm: !this.state.isForm,
      isResults: !this.state.isResults,
    });
  }

  loadingStateHandler() {
    this.setState({isLoading: !this.state.isLoading});
  }

  tweetStateHandler(tweets) {
    this.setState({tweets: tweets});
  }

  render() {

    if(this.state.isForm) {
      body = <Form 
        pageStateHandler    = {this.pageStateHandler}
        tweetStateHandler   = {this.tweetStateHandler}
        loadingStateHandler = {this.loadingStateHandler}
        />
    }

    if(this.state.isResults){
      body = <SubPage 
        pageStateHandler  = {this.pageStateHandler}
        tweetStateHandler = {this.tweetStateHandler}
        tweets = {this.state.tweets}/>
    }

    if(this.state.isLoading){
      body = <div>Loading</div>
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
