import React, { Component } from 'react';
import './Swiper.css';

import Item from './Item/Item';

const children = [];

class Swiper extends Component {

	constructor(props){
		super(props);
  
		this.state = {
			slidingLeft: false,
			slidingRight: false, 
      currentItem: children[0]
		};

    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this); 
	}

	clickLeft() {
		if(!this.state.slidingLeft){
      this.setState({slidingLeft: !this.state.slidingLeft});

      setTimeout(() => { 
        this.setState({slidingLeft: !this.state.slidingLeft}); 
        //update current item
      }, 500);
    } 
  }

	clickRight() {
    if(!this.state.slidingRight){
      this.setState({slidingRight: !this.state.slidingRight});
      
      setTimeout(() => { 
        this.setState({slidingRight: !this.state.slidingRight}); 
          //update current item
      }, 500);
    }	
	}

  render() {

    //This builds a group of Items, each containing a tweet
    let children = this.props.tweets.map((tweet, index) => {
      return(<Item id={index} key={this.props.unique + 'item' + index } content={tweet}/>);
    });

  	let wrapperClasses = ['swiper-wrapper'];

    if(this.state.slidingLeft){
      wrapperClasses.push('slideLeft');
      console.log(wrapperClasses);

      //slide the viewport by item length
    }

    if(this.state.slidingRight){
      wrapperClasses.push('slideRight');
      console.log(wrapperClasses);
    
      //slide the viewport by item length
    }

    return (
    <div>
      <div className="swiper">
      	<div className={wrapperClasses.join(' ')}>
       	 	 {children}
       	</div>
       	
      </div>
      <div className = "button" onClick={this.clickLeft}> Left Button</div>
      <div className = "button" onClick={this.clickRight}> Right Button</div>
    </div>
    );
  }
}

export default Swiper;
