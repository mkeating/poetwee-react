import React, { Component } from 'react';



class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();

    if(!this.state.value || this.state.value.split(' ').length < 2) {
      this.setState({errorMessage: 'Please enter a multi-word phrase!'});
      return;
    } 

    this.props.formStateHandler();
    //turn on loading
    this.props.loadingStateHandler();

    fetch('/get-tweets', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "value": this.state.value}),
    })
      .then(res => {
        if(!res.ok){
          console.log('error');
          console.log(res.statusText);
          //turn off loading     
          this.props.loadingStateHandler();
          //bring back form and display error
          this.props.formStateHandler();
          this.setState({errorMessage: 'There was a server error'});
         }           
         else {
          return res.json();
         }  
      })
      .then(results => {
        //turn off loading
        this.props.loadingStateHandler();
        console.log(results);
        if(results[0].error){
          console.log('error from twitter'); //works; build into UI
        } else{
          this.props.tweetStateHandler(results);
          this.props.formStateHandler();
          this.props.resultsStateHandler();
        }
        
      });     
  }

  render() {
    return (
      <div className="form-container">

      <div>{this.state.errorMessage}</div>
      <form onSubmit = {this.handleSubmit}>
        <label> 
          <input type="text" value={this.state.value} name="searchTerms" onChange={this.handleChange} autoFocus/>
        </label>
        <input type="submit" value="Submit" className="submit-button"/>

      </form>
      </div>
    );
  }
}

export default Form;
