import React from "react";
import { SingleTechCard, SingleTechDiv, SingleTechImg, SingleTechOutOfStock, TechProductName, TechProductPrice } from "./StyledSingleTech";

class SingleTech extends React.Component {
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
            const prices = this.props.singleTech.prices;
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
        if (this.props.singleTech.inStock) {
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