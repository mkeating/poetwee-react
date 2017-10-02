import React, { Component } from 'react';


import Swiper from '../Swiper/Swiper';

class SubPage extends Component {

  /*constructor(props) {
    super(props);
    //console.log('subpage constructor');
    //console.log(typeof(this.props.tweets));
  }*/

  /*renderSwipers(tweetGroups) {

    console.log('tweetGroups: ' + tweetGroups);
    
    for(let key in tweetGroups){
      console.log(tweetGroups);
      return (
          <Swiper tweets={tweetGroups[key]} />
        )
    }
        
    
  }*/


  render() {

   
    /*for(let key in this.props.tweets){
      swipers.push(<Swiper tweets={this.props.tweets[key]} key={'swiper' + key} />)
    }
    const doubled = numbers.map((number) => number * 2);*/

    let swipers = this.props.tweets.map((item, index) => {
      console.log('making swipers');
      console.log(index);
      return(
        <Swiper tweets={item} key={'swiper-' + index}  unique={'swiper-' + index}/>
      )
      } 
    );
    
    console.log('swipers');
    console.log(swipers);

    return (
      <div>
          {swipers}
        <button onClick={this.props.pageStateHandler}> Start over </button>
      </div>
    );
  }
}

export default SubPage;
