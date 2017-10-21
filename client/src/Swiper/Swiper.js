import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Item from './Item/Item';


//TODO: prevent multiple quick clicks


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

    console.log('clicking left');
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
      <div className="swiper">
      	<div className="leftButton" onClick={this.clickLeft}> l </div>
        
          <ReactCSSTransitionGroup
            component="div"
            className="item-container"
            transitionName={this.state.currentTransitionName}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >
            <Item content={tweets[this.state.currentIndex]} key={'item' + this.state.currentIndex}/>
          </ReactCSSTransitionGroup>
         
       <div className = "rightButton" onClick={this.clickRight}> r </div>	
      </div>
      
      
    </div>
    );
  }
}

export default Swiper;
