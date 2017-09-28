import React, { Component } from 'react';


import Swiper from '../Swiper/Swiper';

class SubPage extends Component {

  constructor(props) {
    super(props);
  
    console.log(this.props.tweets);
  }


  render() {
    return (
      <div>
        Hell yeah form submitted

        {
          //For each in this.props.tweets, create a Swiper component with tweets={this.props.tweets[i]}
            <Swiper tweets={this.props.tweets}> </Swiper>
          }
          

        }
       

        <button onClick={this.props.pageStateHandler}> Start over </button>
      </div>
    );
  }
}

export default SubPage;
