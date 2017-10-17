import React, { Component } from 'react';

class TableCell extends Component {
  render() {
    return (
      <td className="item-cell">
        <a onClick={() => this.props.goToDetails(this.props.item)}>
          <img className="item-img" src={this.props.item.image} alt='Unavailable' />
          <p className="item-name">{this.props.item.name}</p>
          <p className="item-price">{this.props.item.price}</p>
        </a>
      </td>
    );
  }
}

export default TableCell;
