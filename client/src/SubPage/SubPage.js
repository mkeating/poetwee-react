import React, { Component } from 'react';


class SubPage extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        Hell yeah form submitted

        <button onClick={this.props.pageStateHandler}> Start over </button>
      </div>
    );
  }
}

export default SubPage;
