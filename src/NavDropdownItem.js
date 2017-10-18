import React, { Component } from 'react';

class NavDropdownItem extends Component {
  render() {
    return (
      <li>
        <img className="ci-img" src={this.props.cartItem.image} />
        <div className="ci-info">
          <p className="ci-name">{this.props.cartItem.name}</p>
          <div className="ci-small-info">
            <p className="ci-qty">Quantity: {this.props.cartItem.quantity}</p>
            <p className="ci-sub">Subtotal: {this.props.cartItem.subtotal}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default NavDropdownItem;
