import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";
import FilterProduct from "./components/filter-product";

class App extends Component {
  state = {
    items: [],
    products: [
      { name: "Baby Schuhe", price: 50, image: "babyschuhe.jpg", description: "Füge das Produkt in den Warenkorb hinzu" },
      { name: "Chucks", price: 80, image: "chucks.jpg", description: "Füge das Produkt in den Warenkorb hinzu" },
      { name: "Nike run", price: 120, image: "nike.jpg", description: "Füge die Nike's in den Warenkorb hinzu" },
      { name: "Leder Schuhe", price: 150, image: "anzugsschuhe.jpg", description: "Füge das Produkt in den Warenkorb hinzu" }
    ],
    search: ""
  };

  addItem = (amount, name, price) => {
    let currentItems = [...this.state.items];
    let existing = currentItems.find((item) => item.name === name);

    if (existing) {
      existing.amount++;
      existing.price += price;
    } else {
      currentItems.push({ amount, name, price });
    }

    this.setState({ items: currentItems });  //new rendering
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <React.Fragment>
        <Navbar />
        <FilterProduct value={this.state.search} onChange={this.handleSearch} />

        <div className="main-container">
          <div className="product_container">
            {filteredProducts.map((product, index) => (
              <Product
                key={index}
                onAdd={() => this.addItem(1, product.name, product.price)}
                image={product.image}
                title={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
          <ShoppingCart items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
