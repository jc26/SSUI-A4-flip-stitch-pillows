import React, { Component } from 'react';
import CartRow from './CartRow.js'

class Cart extends Component {
  deleteItem(id, qtyFunct) {
    var delCart = JSON.parse(localStorage.getItem("cart"));
    delCart.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(delCart));
    this.forceUpdate();
    qtyFunct();
  }

  render() {
    var rows = [];
    var total = 0;
    var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < cart.length; i++){
      rows.push(<CartRow key={i} id={i} item={cart[i]} deleteItem={this.deleteItem.bind(this)} changeQtyInCart={this.props.changeQtyInCart} />);
      total += parseFloat(cart[i].subtotal.substring(1));
    }
    var cartTable = null;
    if (rows.length === 0) {
      cartTable = (
        <h3 className="no-items-msg">No Items.</h3>
      );
    } else {
      cartTable = (
        <div>
          <table id="cart-table">
            <thead>
              <tr id="table-head">
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <br />
          <div id="total-checkout">
            <div className="total">
              <span className="txt">Total</span> &nbsp;&nbsp;<span id="total-price" className="num">{"$" + total}</span>
            </div>
            <a className="checkout-btn">CHECKOUT</a>
          </div>
        </div>
      );
    }
    return (
      <div className="main-body">
        <h1 id="page-title">Your Shopping Cart</h1>
        {cartTable}
      </div>
    );
  }
}

export default Cart;
