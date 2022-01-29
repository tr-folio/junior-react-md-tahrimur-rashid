import React from "react";
import { 
    SingleProductCard, 
    SingleProductImg,
    SingleProductDiv,
    SingleProductName,
    SingleProductOutOfStock,
    SingleProductPrice,
    AlreadyInCart,
    AlreadyInCartImg
} from "./StyledSingleProduct";
import shoppingcartwhite from "../../Images/shoppingcartwhite.png";

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyIndex: 0,
            activeCurrencySymbol: "$",
            alreadyInCart: false
        };
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("currency") === null) {
            localStorage.setItem("currency", "$");
        } else {
            let currencySymbol = localStorage.getItem("currency");
            const prices = this.props.singleProduct.prices;
            for (let i=0; i<prices.length; i++) {
                if (currencySymbol === prices[i].currency.symbol) {
                    this.setState({currencyIndex: i});
                    this.setState({activeCurrencySymbol: currencySymbol});
                    break;
                }
            }
        }
        if (localStorage.getItem("shoppingCart") !== null) {
            const temporary_cart = JSON.parse(localStorage.getItem("shoppingCart"));
            for (let i=0; i<temporary_cart.length; i++) {
                if (temporary_cart[i].id === this.props.singleProduct.id) {
                    this.setState({alreadyInCart: true});
                    break;
                }
            }
        }
    }

    addProductToCart() {
        // if (this.props.singleProduct.inStock && !this.state.alreadyInCart) {
        //     localStorage.setItem("beforeCart", this.props.singleProduct.id);
        //     window.location.pathname = "/add-to-cart";
        // }
        localStorage.setItem("beforeCart", this.props.singleProduct.id);
        window.location.pathname = "/add-to-cart";
    }

    render() {
        return (
            <div>
                <SingleProductCard onClick={this.addProductToCart}>
                    <SingleProductDiv>
                        <div>
                            <SingleProductImg src={this.props.singleProduct.gallery}/>
                            {!this.props.singleProduct.inStock && <SingleProductOutOfStock>OUT OF STOCK</SingleProductOutOfStock>}
                            {this.state.alreadyInCart && <AlreadyInCart><AlreadyInCartImg src={shoppingcartwhite}/></AlreadyInCart>}
                        </div>
                        <SingleProductName>{this.props.singleProduct.name}</SingleProductName>
                        <SingleProductPrice>{this.state.activeCurrencySymbol}{this.props.singleProduct.prices[this.state.currencyIndex].amount}</SingleProductPrice>
                    </SingleProductDiv>
                </SingleProductCard>
            </div>
        )
    }
}

export default SingleProduct;