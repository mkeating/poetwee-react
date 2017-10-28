import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import mod from 'react-swipeable-views-core/lib/mod';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);


//import Item from './Item/Item';


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

  getCurrentItem(index){
    console.log(index);

  }

  finalize() {

  }
  
  render() {

    /*let tweets = this.props.tweets.map((tweet, index) => {
      return tweet;
    });*/

    /*let items = this.props.tweets.map((tweet, index) => {
      console.log(typeof(tweet));
      return <div style={Object.assign({})} key={index} className="item" dangerouslySetInnerHTML={{ __html: tweet }}>
        
      </div>
    });*/

    const slideRenderer = ({key, index}) => {
      return(
        <div key={index} className="item" dangerouslySetInnerHTML={{ __html: this.props.tweets[(mod(index, this.props.tweets.length))] }}>
          
        </div>
        );
    }

    return (
    <div>
      <div className="swiper">
      	{/* <div className="leftButton" onClick={this.clickLeft}> l </div> 
        
          <ReactCSSTransitionGroup
            component="div"
            className="item-container"
            transitionName={this.state.currentTransitionName}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >


            <Item content={tweets[this.state.currentIndex]} key={'item' + this.state.currentIndex}/>
         
          </ReactCSSTransitionGroup>
         
        <div className = "rightButton" onClick={this.clickRight}> r </div>	*/}

        <div className="leftButton" onClick={() => this.setState({currentIndex: this.state.currentIndex - 1})}> l </div> 
        <VirtualizeSwipeableViews
        enableMouseEvents={true}
        disableLazyLoading={true}
        index={this.state.currentIndex}
        slideRenderer = {slideRenderer}

        >
          
        </VirtualizeSwipeableViews>
        <div className = "rightButton" onClick={() => this.setState({currentIndex: this.state.currentIndex + 1})}> r </div>

      </div>
      
      
    </div>
    );
  }
}

export default Swiper;
