import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Swiper.css';

import Item from './Item/Item';


//TODO: handle looping around, sliding directions?


class Swiper extends Component {

	constructor(props){
		super(props);
  
		this.state = {
			slidingLeft: false,
			slidingRight: false,
      currentIndex: 0, 
		};

    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this); 

	}

	clickLeft() {
    
    if(this.state.currentIndex >= 1){
      this.setState({currentIndex: this.state.currentIndex - 1});
    } else {
      this.setState({currentIndex: this.props.tweets.length-1});
    }

  }

	clickRight() {

    if(this.state.currentIndex < (this.props.tweets.length - 1)){
      this.setState({currentIndex: this.state.currentIndex + 1});
    } else {
      this.setState({currentIndex: 0});
    }
   
	}

  /*componentDidMount(props) {
    this.setState({currentIndex: 0});
     
  }*/

  
  render() {

  	let wrapperClasses = ['swiper-wrapper'];

    //This builds a group of Items, each containing a tweet

    let tweets = this.props.tweets.map((tweet, index) => {
      return tweet;
      //return(<Item id={index} key={this.props.unique + 'item' + index } content={tweet}/>);
    });


    /*if(this.state.slidingLeft){
      wrapperClasses.push('slideLeft');

    }

    if(this.state.slidingRight){
      wrapperClasses.push('slideRight');
      //console.log(wrapperClasses);
      //slide the viewport by item length
    }*/

    return (
    <div>
      <div className="swiper" >
      	
        <ReactCSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <Item content={tweets[this.state.currentIndex]}/>
        </ReactCSSTransitionGroup>
       	 	 
       	
       	
      </div>
      <div className = "button" onClick={this.clickLeft}> Left Button</div>
      <div className = "button" onClick={this.clickRight}> Right Button</div>
    </div>
    );
  }
}

export default Swiper;
