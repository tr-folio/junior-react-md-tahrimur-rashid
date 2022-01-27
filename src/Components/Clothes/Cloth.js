import React from "react";
import { 
    AlreadyInCart,
    AlreadyInCartImg,
    ClothCard, 
    ClothImg, 
    ClothName,
    ClothPrice,
    SingleClothDiv,
    SingleClothOutOfStock
} from "./StyledCloth";
import shoppingcartwhite from "../../Images/shoppingcartwhite.png";

class Cloth extends React.Component {
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
            const prices = this.props.singleCloth.prices;
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
                if (temporary_cart[i].id === this.props.singleCloth.id) {
                    this.setState({alreadyInCart: true});
                    break;
                }
            }
        }
    }

    addProductToCart() {
        if (this.props.singleCloth.inStock) {
            localStorage.setItem("beforeCart", this.props.singleCloth.id);
            window.location.pathname = "/add-to-cart";
        }
        // localStorage.setItem("beforeCart", this.props.singleCloth.id);
        // window.location.pathname = "/add-to-cart";
    }

    render () {
        return (
            <div>
                <ClothCard onClick={this.addProductToCart}>
                    <SingleClothDiv>
                        <div>
                            <ClothImg src={this.props.singleCloth.gallery}/>
                            {!this.props.singleCloth.inStock && <SingleClothOutOfStock>OUT OF STOCK</SingleClothOutOfStock>}
                            {this.state.alreadyInCart && <AlreadyInCart><AlreadyInCartImg src={shoppingcartwhite}/></AlreadyInCart>}
                        </div>
                        <ClothName>{this.props.singleCloth.name}</ClothName>
                        <ClothPrice>{this.state.activeCurrencySymbol}{this.props.singleCloth.prices[this.state.currencyIndex].amount}</ClothPrice>
                    </SingleClothDiv>
                </ClothCard>
            </div>
        );
    }
}

export default Cloth;