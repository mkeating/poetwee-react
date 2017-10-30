import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import mod from 'react-swipeable-views-core/lib/mod';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

//TODO: prevent multiple quick clicks

class Swiper extends Component {

	constructor(props){
		super(props);
  
		this.state = {
      currentIndex: 0,
		};
	}

  componentDidUpdate(){
    //this.props.updateCurrentTweets(this.key, this.props.tweets[this.state.currentIndex]);
    console.log(this.props.unique);
    console.log(this.props.tweets[this.state.currentIndex]);
  }

  render() {

    const slideRenderer = ({key, index}) => {
      return(
        <div key={index} className="item" dangerouslySetInnerHTML={{ __html: this.props.tweets[(mod(index, this.props.tweets.length))] }}>         
        </div>
        );
    }

    return (
        <div>
          <div className="swiper">
            <div className="leftButton" onClick={() => this.setState({currentIndex: this.state.currentIndex - 1})}> l </div> 
            
            <VirtualizeSwipeableViews
              enableMouseEvents={true}
              disableLazyLoading={true}
              index={this.state.currentIndex}
              onChangeIndex={(indexLatest)=>{this.setState({currentIndex:indexLatest})}}
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
