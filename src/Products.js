import React, { Component } from 'react';
import TableCell from './TableCell.js';

class Products extends Component {
  render() {
    var productJSON = require('./resources/products.json');
    var cells = [];
    cells.push(<TableCell goToDetails={this.props.goToDetails} key={productJSON.couchPillow.id} item={productJSON.couchPillow} />);
    cells.push(<TableCell goToDetails={this.props.goToDetails} key={productJSON.bedPillow.id} item={productJSON.bedPillow} />);
    cells.push(<TableCell goToDetails={this.props.goToDetails} key={productJSON.floorPoufPillow.id} item={productJSON.floorPoufPillow} />);
    cells.push(<TableCell goToDetails={this.props.goToDetails} key={productJSON.roundPillow.id} item={productJSON.roundPillow} />);
    return (
      <div className="main-body">
        <h1 id="page-title">Our Products</h1>
        <table className="items-table">
          <tbody>
            <tr>
              {cells}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
