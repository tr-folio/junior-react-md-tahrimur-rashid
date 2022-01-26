import React from "react";
import { 
    SingleProductCard, 
    SingleProductImg,
    SingleProductDiv,
    SingleProductName,
    SingleProductOutOfStock,
    SingleProductPrice
} from "./StyledSingleProduct";

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyIndex: 0,
            activeCurrencySymbol: "$"
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
    }

    addProductToCart() {
        if (this.props.singleProduct.inStock) {
            localStorage.setItem("beforeCart", this.props.singleProduct.id);
            window.location.pathname = "/add-to-cart";
        }
    }

    render() {
        return (
            <div>
                <SingleProductCard onClick={this.addProductToCart}>
                    <SingleProductDiv>
                        <div>
                            <SingleProductImg src={this.props.singleProduct.gallery}/>
                            {!this.props.singleProduct.inStock && <SingleProductOutOfStock>OUT OF STOCK</SingleProductOutOfStock>}
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