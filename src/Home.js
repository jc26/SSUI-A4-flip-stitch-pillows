import React, { Component } from 'react';
import women_sleeping from './images/women_sleeping.jpeg';

class Home extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="main-text">
          <h1>Tired of Dull <br />Pillows?</h1>
          <p>
            We specialize in custom decorative throw pillows. All <br />
            pillows are handmade in our personal artisan's workshop, <br />
            where quality and craftsmanship go hand-in-hand.
          </p>
          <a onClick={this.props.goToProducts} className="button">BROWSE</a>
        </div>
        <div className="main-img">
          <img src={women_sleeping} alt="Comfortable Woman Sleeping" />
        </div>
      </div>
    );
  }
}

export default Home;
