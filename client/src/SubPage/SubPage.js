import React, { Component } from 'react';

import Swiper from '../Swiper/Swiper';

class SubPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finalTweets: {},
    };

    this.updateCurrentTweets = this.updateCurrentTweets.bind(this);
  }

  updateCurrentTweets(key, tweet){
    let newTweet = {key, tweet};
    this.setState({finalTweets: newTweet});
  }

  render() {

    //This creates a group of n Swipers, where n is the number of words in the user's input

   

    let swipers = this.props.tweets.map((item, index) => {
      return(
            <Swiper tweets={item} key={'swiper-' + index}  unique={'swiper-' + index} updateCurrentTweets={this.updateCurrentTweets} 
            />
      )
    });

    return (


      <div>
          {swipers}
        <button onClick={this.props.pageStateHandler}> Start over </button>
        <button onClick={() => {console.log(this.state.finalTweets)}}> test </button>
      </div>
    );
  }
}

export default SubPage;
