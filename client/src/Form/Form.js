import React, { Component } from 'react';



class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();

    if(!this.state.value) {
      this.setState({errorMessage: 'Please enter something'});
      return;
    } 

    //turn on loading
    this.props.loadingStateHandler();
    fetch('/get-tweets', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "value": this.state.value}),
    })
      .then(res => {
        if(!res.ok) {
          this.setState({errorMessage: 'Something went wrong'});
        }
        return res;
      })
      .then(res => res.json())
      .then(results => {
        //turn off loading
        this.props.loadingStateHandler();
        this.props.tweetStateHandler(results);
        this.props.pageStateHandler();
      }).catch(err => {
         console.log(err);
      });     
  }

  render() {
    return (
      <div className="form-container">
      <form onSubmit = {this.handleSubmit}>
        <label>

          <div className="error"> {this.state.errorMessage} </div>
          
          <input type="text" value={this.state.value} name="searchTerms" onChange={this.handleChange} autoFocus/>
        </label>
        <input type="submit" value="Submit" className="submit-button"/>

      </form>
      </div>
    );
  }
}

export default Form;
