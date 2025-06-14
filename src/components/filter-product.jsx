import React, { Component } from "react";

class FilterProduct extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Produkte finden"
        value={this.props.value}
        onChange={this.props.onChange}
        className="form-control m-3"
      />
    );
  }
}

export default FilterProduct;
