import React, { Component } from 'react';
import './Swiper.css';

import Item from './Item/Item';


//TODO: set currentItem. might have to rethink how I'm doing sliding


class Swiper extends Component {

	constructor(props){
		super(props);
  
		this.state = {
			slidingLeft: false,
			slidingRight: false, 
		};

    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this); 


	}

	clickLeft() {

    
		if(!this.state.slidingLeft){
      this.setState({slidingLeft: !this.state.slidingLeft});
      this.setState({currentIndex: this.state.currentIndex - 1}); 
      


      setTimeout(() => { 
        this.setState({slidingLeft: !this.state.slidingLeft}); 
          //update current item

      }, 10);
    } 
  }

	clickRight() {

    
    if(!this.state.slidingRight){
      this.setState({slidingRight: !this.state.slidingRight});
      this.setState({currentIndex: this.state.currentIndex + 1});
      
      setTimeout(() => { 
        this.setState({slidingRight: !this.state.slidingRight}); 
        
      }, 10);
    }	
	}

  componentDidMount(props) {
    this.setState({currentIndex: 0});
     
  }

  componentDidUpdate() {

    //this.setState({currentItem: children[this.state.currentIndex]});
  }

  render() {

  	let wrapperClasses = ['swiper-wrapper'];

    //This builds a group of Items, each containing a tweet
    //TODO: this probably shouldnt be in render()??

    let children = this.props.tweets.map((tweet, index) => {
      console.log('gen children');
      return(<Item id={index} key={this.props.unique + 'item' + index } content={tweet}/>);
    });


    console.log('swiper render');
    console.log(this.state.currentItem);
    console.log(this.children);

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
