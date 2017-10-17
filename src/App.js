import React, { Component } from 'react';
import Nav from './Nav.js';
import Home from './Home.js';
import Details from './Details.js';
import Products from './Products.js';
import Cart from './Cart.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    localStorage.clear(); //??
    localStorage.setItem("cart", JSON.stringify([]));
    this.state = {
      mainBody: <Home goToProducts={this.goToProducts.bind(this)} />,
      active: "home",
      cartSize: "00"
    };
  }

  goToDetails(product) {
    this.setState({
      mainBody: <Details item={product} changeQtyInCart={this.changeQtyInCart.bind(this)}/>,
      active: "products",
      cartSize: this.state.cartSize
    });
  }

  goToProducts() {
    this.setState({
      mainBody: <Products goToDetails={this.goToDetails.bind(this)} />,
      active: "products",
      cartSize: this.state.cartSize
    });
  }

  goToHome() {
    this.setState({
      mainBody: <Home goToProducts={this.goToProducts.bind(this)} />,
      active: "home",
      cartSize: this.state.cartSize
    });
  }

  changeQtyInCart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var size = 0;
    for (var i = 0; i < cart.length; i++){
      size += parseInt(cart[i].quantity, 10);
    }
    var sizeStr = "";
    (size > 9) ? sizeStr = size.toString() : sizeStr = "0" + size.toString();
    this.setState({
      mainBody: <Cart changeQtyInCart={this.changeQtyInCart.bind(this)} />,
      active: "cart",
      cartSize: sizeStr
    });
  }

  goToCart() {
    this.setState({
      mainBody: <Cart changeQtyInCart={this.changeQtyInCart.bind(this)} />,
      active: "cart",
      cartSize: this.state.cartSize
    });
  }

  render() {
    return (
      <div>
        <Nav goToHome={this.goToHome.bind(this)} goToProducts={this.goToProducts.bind(this)} goToCart={this.goToCart.bind(this)} active={this.state.active} cartSize={this.state.cartSize} />
        {this.state.mainBody}
      </div>
    );
  }
}

export default App;
