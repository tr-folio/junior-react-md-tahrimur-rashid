import React from "react";
import { 
    SingleProductCard, 
    SingleProductImg,
    SingleProductName,
    SingleProductPrice
} from "./StyledSingleProduct";

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyIndex: 0,
            activeCurrencySymbol: "$"
        }
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
    render() {
        return (
            <div>
                <SingleProductCard>
                    <div>
                        <SingleProductImg src={this.props.singleProduct.gallery}/>
                    </div>
                    <SingleProductName>{this.props.singleProduct.name}</SingleProductName>
                    <SingleProductPrice>{this.state.activeCurrencySymbol}{this.props.singleProduct.prices[this.state.currencyIndex].amount}</SingleProductPrice>
                </SingleProductCard>
            </div>
        )
    }
}

export default SingleProduct;