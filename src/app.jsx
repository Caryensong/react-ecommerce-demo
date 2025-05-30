import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
    state = {  }
render() { 
    return (
        <React.Fragment>
            <Navbar />
            <div className='product_container'>
                <Product image="babyschuhe.jpg" title="Baby Schuhe"  description="Füge das Produkt in den Warenkorb hinzu"/>
                <Product image="chucks.jpg" title="Chucks" description="Füge das Produkt in den Warenkorb hinzu"/>
                <Product image="nike.jpg" title="Nike run" description="Füge die Nike's in den Warenkorb hinzu"/>
                <Product image="anzugsschuhe.jpg" title="Leder Schuhe" description="Füge das Produkt in den Warenkorb hinzu"/>
            </div>
            
        </React.Fragment>
    );
}
}
 
export default App;