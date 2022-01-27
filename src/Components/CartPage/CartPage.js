import React from "react";
import SingleCartItems from "./SingleCartItems";
import { CartDiv } from "./StyledCartPage";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        if (localStorage.getItem("shoppingCart") !== null) {
            const temporary_cart = JSON.parse(localStorage.getItem("shoppingCart"));
            this.state.cart = [...temporary_cart];
            // console.log(this.state.cart);
        }
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <CartDiv>
                    {this.state.cart.map(singleCartItem => <SingleCartItems key={singleCartItem.id} singleCartItem={singleCartItem}></SingleCartItems>)}
                </CartDiv>
            </div>
        );
    }
}

export default CartPage;