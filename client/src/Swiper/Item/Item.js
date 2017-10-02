import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render( ) {
    return (
      <div className="item" id={this.props.id}>
        <div className="item-content">{this.props.content}</div>
      </div>
    );
  }
}

export default Item;
