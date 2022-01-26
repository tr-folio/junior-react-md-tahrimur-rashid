import React from "react";
import { 
    ClothCard, 
    ClothImg, 
    ClothName,
    ClothPrice,
    SingleClothDiv,
    SingleClothOutOfStock
} from "./StyledCloth";

class Cloth extends React.Component {
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
            const prices = this.props.singleCloth.prices;
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
                        </div>
                        <ClothName>{this.props.singleCloth.name}</ClothName>
                        <ClothPrice>${this.props.singleCloth.prices[0].amount}</ClothPrice>
                    </SingleClothDiv>
                </ClothCard>
            </div>
        );
    }
}

export default Cloth;