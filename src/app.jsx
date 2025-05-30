import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {
    items: [],
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;
    currentItems.push({
      amount,
      name,
      price,
    });
    this.setState({ items: currentItems }); // Update the state with the new items array
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="product_container">
            <Product
              onAdd={() => this.addItem(1, "Baby Schuhe", 50)}
              image="babyschuhe.jpg"
              title="Baby Schuhe"
              description="Füge das Produkt in den Warenkorb hinzu"
            />
            <Product
              onAdd={() => this.addItem(1, "Chucks", 80)}
              image="chucks.jpg"
              title="Chucks"
              description="Füge das Produkt in den Warenkorb hinzu"
            />
            <Product
              onAdd={() => this.addItem(1, "Nike run", 120)}
              image="nike.jpg"
              title="Nike run"
              description="Füge die Nike's in den Warenkorb hinzu"
            />
            <Product
              onAdd={() => this.addItem(1, "Leder Schuhe", 150)}
              image="anzugsschuhe.jpg"
              title="Leder Schuhe"
              description="Füge das Produkt in den Warenkorb hinzu"
            />
          </div>
          <ShoppingCart items={this.state.items}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
