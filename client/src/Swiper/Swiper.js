import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Swiper.css';

import Item from './Item/Item';


//TODO: sliding directions?


class Swiper extends Component {

	constructor(props){
		super(props);
  
		this.state = {
      currentIndex: 0,
      currentTransitionName: 'slidingLeft' 
		};

    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this); 

	}

	clickLeft() {

    this.setState({currentTransitionName: 'slidingLeft'});

    if(this.state.currentIndex >= 1){
      this.setState({currentIndex: this.state.currentIndex - 1});
    } else {
      this.setState({currentIndex: this.props.tweets.length-1});
    }

  }

	clickRight() {


    this.setState({currentTransitionName: 'slidingRight'});

    if(this.state.currentIndex < (this.props.tweets.length - 1)){
      this.setState({currentIndex: this.state.currentIndex + 1});
    } else {
      this.setState({currentIndex: 0});
    }
   
	}
  
  render() {

    let tweets = this.props.tweets.map((tweet, index) => {
      return tweet;
    });

    return (
    <div>
      <div className="swiper" >
      	
        <ReactCSSTransitionGroup
          transitionName={this.state.currentTransitionName}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <Item content={tweets[this.state.currentIndex]} key={'item' + this.state.currentIndex}/>
        </ReactCSSTransitionGroup>
       
       	
      </div>
      <div className = "button" onClick={this.clickLeft}> Left Button</div>
      <div className = "button" onClick={this.clickRight}> Right Button</div>
    </div>
    );
  }
}

export default Swiper;
