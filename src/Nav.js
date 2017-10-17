import React, { Component } from 'react';
import logo from './images/logo_web.svg';
import cart_icon from './images/shopping-cart.svg';

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
    // cartSize display

    // var sizeStr = "";
    // (size > 9) ? sizeStr = size.toString() : sizeStr = "0" + size.toString();
    // html
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
              </a>
              <p id="items-num" onClick={this.props.goToCart}>{this.props.cartSize}</p>
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
