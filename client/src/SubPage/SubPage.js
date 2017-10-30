import React, { Component } from 'react';

import Swiper from '../Swiper/Swiper';

class SubPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finalTweets: {},
    };

    this.updateCurrentTweets = this.updateCurrentTweets.bind(this);
    this.checkChildren = this.checkChildren.bind(this);

    this.finalTweets = {};
  }

  updateCurrentTweets(key, tweet){
    //let newTweet = {key, tweet};
    //this.setState({finalTweets: newTweet});

    this.finalTweets[key] = tweet;
  }

  checkChildren(){
    console.log(this.finalTweets);
  }

  render() {

    //This creates a group of n Swipers, where n is the number of words in the user's input

   

    let swipers = this.props.tweets.map((item, index) => {

      //convert tweets object to array to allow for the infinite/looping scrolling of the swiper
      /*const tweetsArray = Array.from(item);

      console.log(typeof(tweetsArray));

      console.log(tweetsArray);*/

      return(
            <Swiper tweets={item} key={'swiper-' + index}  unique={'swiper-' + index} updateCurrentTweets={this.updateCurrentTweets} 
            />
      )
    });

    return (


      <div>
          {swipers}
        <button onClick={this.props.pageStateHandler}> Start over </button>
        <button onClick={this.checkChildren}> test </button>
      </div>
    );
  }
}

export default SubPage;
