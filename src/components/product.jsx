import React, { Component } from "react";

class Product extends Component {
  render() {
    const { image, title, description, price, onAdd } = this.props;
    return (
      <div className="card" style={{ width: "14rem", margin: "10px" }}>
        <img
          src={"assets/img/" + image}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p><strong>{price} €</strong></p>
          <button onClick={onAdd} className="btn btn-primary">
            Hinzufügen
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
