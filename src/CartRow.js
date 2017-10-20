import React, { Component } from 'react';

class CartRow extends Component {
  render() {
    return (
      <tr id={this.props.id} className="item-row">
        <td className="x-btn">
          <button id={this.props.id + "-btn"} className="rm-btn" type="button" onClick={() => this.props.deleteItem(this.props.id, this.props.changeQtyInCart)}>&times;</button>
        </td>
        <td className="cart-img">
          <img className="item-img" src={this.props.item.image} alt="Unavailable" />
        </td>
        <td className="cart-name">{this.props.item.name}</td>
        <td className="cart-price">{this.props.item.price}</td>
        <td id={this.props.id + "quantity"} className="cart-quantity">{this.props.item.quantity}</td>
        <td id={this.props.id + "subtotal"} className="cart-subtotal">{this.props.item.subtotal}</td>
      </tr>
    );
  }
}

export default CartRow;
