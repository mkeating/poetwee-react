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

    if(!this.state.value) {
      this.setState({errorMessage: 'Please enter a multi-word phrase!'});
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

        if(!res.ok){
          console.log('error');
          console.log(res);

       
            
          this.props.loadingStateHandler();
          this.props.formStateHandler();
          this.props.errorHandler('woops!');
         }           
        return res.json();
      })
      .then(results => {
        //turn off loading
        this.props.loadingStateHandler();
        this.props.tweetStateHandler(results);
        this.props.formStateHandler();
        this.props.resultsStateHandler();
      }).catch(err => {
        
      });     
  }

  render() {
    return (
      <div className="form-container">
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
