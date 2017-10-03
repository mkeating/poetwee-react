import React, { Component } from 'react';
import './Swiper.css';

import Item from './Item/Item';


//TODO: set currentItem. might have to rethink how I'm doing sliding
const children = [];

class Swiper extends Component {

	constructor(props){
		super(props);
  
		this.state = {
			slidingLeft: false,
			slidingRight: false, 
      currentItem: null
		};

    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this); 
	}



	clickLeft() {

    
		if(!this.state.slidingLeft){
      this.setState({slidingLeft: !this.state.slidingLeft});
      

      setTimeout(() => { 
        this.setState({slidingLeft: !this.state.slidingLeft}); 


      }, 2000);
    } 
  }

	clickRight() {

    
    if(!this.state.slidingRight){
      this.setState({slidingRight: !this.state.slidingRight});
      
      setTimeout(() => { 
        this.setState({slidingRight: !this.state.slidingRight}); 
          //update current item
      }, 2000);
    }	
	}

  componentDidMount() {
    this.setState({currentItem: children[0]});
  }

  render() {

    //This builds a group of Items, each containing a tweet
    let children = this.props.tweets.map((tweet, index) => {
      return(<Item id={index} key={this.props.unique + 'item' + index } content={tweet}/>);
    });



  	let wrapperClasses = ['swiper-wrapper'];
    console.log('swiper render');
    console.log(this.state.currentItem);

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
