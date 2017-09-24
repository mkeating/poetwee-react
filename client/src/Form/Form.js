import React, { Component } from 'react';

import './Form.css';


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();

    fetch('/get-tweets', {
      method: 'POST',
      headers: {"Content-Type": "application/JSON"}
    })
      .then(res => res.json())
      .then(results => {
        
        this.props.tweetStateHandler(results);
        this.props.pageStateHandler();

      });
      
  }


  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      </form>
    );
  }
}

export default Form;
