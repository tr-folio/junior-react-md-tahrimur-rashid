import React from "react";
import { 
    AlreadyInCart,
    AlreadyInCartImg,
    SingleTechCard, 
    SingleTechDiv, 
    SingleTechImg, 
    SingleTechOutOfStock, 
    TechProductName, 
    TechProductPrice 
} from "./StyledSingleTech";
import shoppingcartwhite from "../../Images/shoppingcartwhite.png";

class SingleTech extends React.Component {
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
            const prices = this.props.singleTech.prices;
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
                if (temporary_cart[i].id === this.props.singleTech.id) {
                    this.setState({alreadyInCart: true});
                    break;
                }
            }
        }
    }

    addProductToCart() {
        if (this.props.singleTech.inStock && !this.state.alreadyInCart) {
            localStorage.setItem("beforeCart", this.props.singleTech.id);
            window.location.pathname = "/add-to-cart";
        }
        // localStorage.setItem("beforeCart", this.props.singleTech.id);
        // window.location.pathname = "/add-to-cart";
    }

    render() {
        return (
            <div>
                <SingleTechCard onClick={this.addProductToCart}>
                    <SingleTechDiv>
                        <div>
                            <SingleTechImg src={this.props.singleTech.gallery}/>
                            {!this.props.singleTech.inStock && <SingleTechOutOfStock>OUT OF STOCK</SingleTechOutOfStock>}
                            {this.state.alreadyInCart && <AlreadyInCart><AlreadyInCartImg src={shoppingcartwhite}/></AlreadyInCart>}
                        </div>
                        <TechProductName>{this.props.singleTech.name}</TechProductName>
                        <TechProductPrice>{this.state.activeCurrencySymbol}{this.props.singleTech.prices[this.state.currencyIndex].amount}</TechProductPrice>
                    </SingleTechDiv>
                </SingleTechCard>
            </div>
        );
    }
}

export default SingleTech;