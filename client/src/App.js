import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form/Form';
import SubPage from  './SubPage/SubPage';

let body = {};

class App extends Component {

  state = {
    users: [],
    isForm: true,
    isResults: false
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }


  render() {

    if(this.state.isForm) {
      body = <Form />
    }

    if(this.state.isResults){
      body = <SubPage />
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
