import React, { Component } from 'react';
import logo from './images/logo_web.svg';
import cart_icon from './images/shopping-cart.svg';
import NavDropdownItem from './NavDropdownItem.js';

class Nav extends Component {
  render() {
    // active yellow rectangle
    var homeActive = "";
    var productsActive = "";
    var cartActive = "";
    if (this.props.active === "home") {
      homeActive = "active";
    } else if (this.props.active === "products") {
      productsActive = "active";
    } else {
      cartActive = <div id="yellow-rect"></div>;
    }
    // get cart and total
    var cartItems = [];
    var total = 0;
    var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < cart.length; i++){
      cartItems.push(<NavDropdownItem key={i} cartItem={cart[i]} />)
      total += parseFloat(cart[i].subtotal.substring(1));
    }
    var cartDropdown = null;
    if (cartItems.length === 0) {
      cartDropdown = (
        <div className="dropdown-cart">
          <p className="dropdown-no-items">Add some items to your cart!</p>
        </div>
      );
    } else {
      cartDropdown = (
        <div className="dropdown-cart">
          <div className="drop-title">
            <p className="drop-total">Total: <span className="total-cost">${total.toFixed(2)}</span></p>
            <button className="ci-checkout-btn">CHECKOUT</button>
          </div>
          <hr />
          <ul className="cart-items">
            {cartItems}
          </ul>
        </div>
      );
    }
    return (
      <div className="nav-bar">
        <div id="nav-container">
          <ul>
            <li>
              <a href="index.html">
                {cartActive}
                <img id="logo" src={logo} alt="FSP Logo" onClick={this.props.goToHome} />
              </a>
            </li>
            <li>
              <a className="cart" onClick={this.props.goToCart}>
                {cartActive}
                <img id="cart-icon" src={cart_icon} alt="cart" />
                <p id="items-num" onClick={this.props.goToCart}>{this.props.cartSize}</p>
                {cartDropdown}
              </a>
            </li>
            <li><a className={"tab " + productsActive} onClick={this.props.goToProducts}>PRODUCTS</a></li>
            <li><a className={"tab " + homeActive} onClick={this.props.goToHome}>HOME</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
