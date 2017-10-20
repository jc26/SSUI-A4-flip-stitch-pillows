import React, { Component } from 'react';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      shape: "",
      quantity: 1
    };
  }

  selectOpt(id) { // selecting shape of item
    var selected = document.getElementById(id);
    var previous = document.getElementById(this.state.shape);
    if (this.state.shape === "custom") {
      document.getElementById("custom-text").remove();
    }
    if (this.state.shape === "") {
      selected.style.backgroundColor = "#4F72F0";
      selected.style.color = "white";
    } else if (this.state.shape === selected.innerHTML) {
      selected.style.backgroundColor = "white";
      selected.style.color = "black";
      this.setState({
        shape: "",
        quantity: this.state.quantity
      });
      return;
    } else {
      previous.style.backgroundColor = "white";
      previous.style.color = "black";
      selected.style.backgroundColor = "#4F72F0";
      selected.style.color = "white";
    }
    if (selected.innerHTML === "custom") {
      var div = document.getElementById("details-info");
      var textarea = document.createElement("textarea");
      textarea.id = "custom-text";
      textarea.class = "custom-shape";
      textarea.maxLength = "5000";
      textarea.placeholder = "Please write your request here, and we will see what we can do!"
      div.appendChild(textarea);
    }
    this.setState({
      shape: id,
      quantity: this.state.quantity
    });
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  addToCart(item, qtyFunct) {
    if (this.state.shape !== "") {
      var cart = JSON.parse(localStorage.getItem("cart"));
      var repeat = false;
      var newName = item.name + " - " + this.capitalize(this.state.shape);
      for (var i = 0; i < cart.length; i++){
        if (newName === cart[i].name) {
          cart[i].quantity += this.state.quantity;
          cart[i].subtotal = "$" + (parseFloat(item.price.substring(1)) * cart[i].quantity).toFixed(2);
          repeat = true;
        }
      }
      if (!repeat) {
        var cartItem = {
                        name: newName,
                        image: item.image,
                        price: item.price,
                        quantity: this.state.quantity,
                        subtotal: "$" + (parseFloat(item.price.substring(1)) * this.state.quantity).toFixed(2)
                       };
        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      var size = localStorage.getItem("size");
      localStorage.setItem("size", size + this.state.quantity);
      alert(this.state.quantity + " order(s) of " + document.getElementById('item-name').innerHTML +
            "(s) with a " + this.state.shape + " shape have been added to your cart.");
      this.setState({
        shape: "",
        quantity: this.state.quantity
      });
      qtyFunct();
    } else {
      alert("Please select a shape before adding item to cart.");
    }
  }

  subtract() {
    if (this.state.quantity > 1) {
      this.setState({
        shape: this.state.shape,
        quantity: this.state.quantity - 1
      });
    }
  }

  add() {
    if (this.state.quantity < 99) {
      this.setState({
        shape: this.state.shape,
        quantity: this.state.quantity + 1
      });
    }
  }

  render() {
    return (
      <div className="main-body">
        <h1 id="page-title">Our Products</h1>
        <table className="details-table">
          <tbody>
            <tr>
              <td className="details-img">
                <img className="item-img" src={this.props.item.image} alt="Unavailable" />
                <a id="add-btn" className="button" onClick={() => this.addToCart(this.props.item, this.props.changeQtyInCart)}>
                  ADD TO CART
                </a>
              </td>
              <td id="details-info" className="details-info">
                <p id="item-name" className="item-name">{this.props.item.name}</p>
                <p className="item-price">{this.props.item.price}</p>
                <p className="item-desc">{this.props.item.description}</p>
                <p className="item-quantity">Quantity</p>
                <div className="quantity-form">
                    <button className="quantity-btn minus" onClick={() => this.subtract()}>-</button>
                    <p id="input-quantity" className="quantity-fill">{this.state.quantity}</p>
                    <button className="quantity-btn plus" onClick={() => this.add()}>+</button>
                </div>
                <p className="item-shape">Shape</p>
                <p id="square" className="shape-opt" onClick={() => this.selectOpt("square")}>square</p>
                <p id="round" className="shape-opt" onClick={() => this.selectOpt("round")}>round</p>
                <p id="dog" className="shape-opt" onClick={() => this.selectOpt("dog")}>dog</p>
                <p id="bear" className="shape-opt" onClick={() => this.selectOpt("bear")}>bear</p>
                <p id="bunny" className="shape-opt" onClick={() => this.selectOpt("bunny")}>bunny</p>
                <p id="cat" className="shape-opt" onClick={() => this.selectOpt("cat")}>cat</p>
                <p id="custom" className="shape-opt" onClick={() => this.selectOpt("custom")}>custom</p>
                <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
