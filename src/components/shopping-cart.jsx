import React, { Component }from "react";

class ShoppingCart extends Component {
    state = {  
        items:[
            {
                amount: 1,
                name:'Nike run',
                price: 120,
        },
            {
                amount: 2,
                name:'Chucks',
                price: 80,
            },
            {
                amount: 1,
                name:'Leder Schuhe',
                price: 150,
            },
            {
                amount: 1,
                name:'Baby Schuhe',
                price: 50,
            }
    ]
    } 
    render() { 
        return (
            <div className="shopping-cart">
                <h2>Warenkorb</h2>
               {this.state.items.map( item => <div key={item.name}>{item.amount}x {item.name} {item.price} €</div>)}
            </div>
        );
    }
}
 
export default ShoppingCart;