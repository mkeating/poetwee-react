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
      users: [],
      tweets: [],
      isForm: true,
      isResults: false
    }

    this.pageStateHandler = this.pageStateHandler.bind(this);

  }

  pageStateHandler() {
    
    this.setState({
      isForm: !this.state.isForm,
      isResults: !this.state.isResults,
    });

    console.log(this.state);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {

    if(this.state.isForm) {
      body = <Form pageStateHandler = {this.pageStateHandler}/>
    }

    if(this.state.isResults){
      body = <SubPage pageStateHandler = {this.pageStateHandler}/>
    }

    return (


      <div className="App">
        <h1> Users </h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        

        {body}
        
      
      </div>
     
    );
  }
}

export default App;
