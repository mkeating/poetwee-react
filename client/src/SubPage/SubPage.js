import React, { Component } from 'react';

import Swiper from '../Swiper/Swiper';

class SubPage extends Component {

  render() {

    //This creates a group of n Swipers, where n is the number of words in the user's input
    //TODO: this probably shouldnt be in render()??

    let swipers = this.props.tweets.map((item, index) => {
      return(
            <Swiper tweets={item} key={'swiper-' + index}  unique={'swiper-' + index}/>
      )
    });
    
    return (
      <div>
          {swipers}
        <button onClick={this.props.pageStateHandler}> Start over </button>
      </div>
    );
  }
}

export default SubPage;
