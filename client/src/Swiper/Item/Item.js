import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render( ) {
    return (
      <div className="item" id={this.props.id}>
        {this.props.content}
      </div>
    );
  }
}

export default Item;
