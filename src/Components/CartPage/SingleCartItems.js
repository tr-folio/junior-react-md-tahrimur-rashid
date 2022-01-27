import React from "react";
import { CartAttrubutesButton, CountDiv, ImgDiv, InfoDiv, PlusMinusButton, ProductImg, SingleCartItemDiv } from "./StyledSingleCartItem";

class SingleCartItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            items: [],
            currencyIndex: 0,
            activeCurrencySymbol: "$",
            prices: [],
            amount: 0,
            isColorAttribute: false,
            attributes: {}
        };
    }

    componentDidMount() {
        const productId = this.props.singleCartItem.id;
        const query = `
            {
                product(id: "`+productId+`") {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
                    brand
                    attributes {
                        id
                        name
                        type
                        items {
                            displayValue
                            value
                            id
                        }
                    }
                    prices {
                        currency {
                            label
                            symbol
                        }
                        amount
                    }
                }
            }        
        `;
        fetch('http://localhost:4000/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query })
        }).then(response => response.json())
        .then((data) => {
            // console.log(data.data.product);
            this.setState({product: data.data.product});
            // console.log(this.state.product);
            this.setState({prices: data.data.product.prices});
            // console.log(this.state.prices[0].amount);
            if (data.data.product.attributes !== []) {
                this.setState({attributes: data.data.product.attributes[0]});
                this.setState({items: data.data.product.attributes[0].items});
                // console.log(this.state.items);
                if (this.state.attributes?.name === "Color") {
                    this.setState({isColorAttribute: true});
                }
            }
            if (localStorage.getItem("currency") === null) {
                localStorage.setItem("currency", "$");
            } else {
                let currencySymbol = localStorage.getItem("currency");
                const prices = this.state.product.prices;
                for (let i=0; i<prices.length; i++) {
                    if (currencySymbol === prices[i].currency.symbol) {
                        this.setState({currencyIndex: i});
                        // console.log(this.state.currencyIndex);
                        // console.log(this.state.prices[this.state.currencyIndex].amount);
                        this.setState({amount: this.state.prices[this.state.currencyIndex].amount})
                        this.setState({activeCurrencySymbol: currencySymbol});
                        // console.log(this.state.activeCurrencySymbol);
                        break;
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <SingleCartItemDiv>
                    <InfoDiv>
                        <h3>{this.props.singleCartItem.name}</h3>
                        <h4>{this.state.activeCurrencySymbol}{this.state.amount}</h4>
                        <div>
                            {this.state.isColorAttribute && <span>{this.state.items.map(item => <CartAttrubutesButton key={item.id} id={item.id} style={{background: `${item.value}`}}></CartAttrubutesButton>)}</span>}
                            {!this.state.isColorAttribute && <span>{this.state.items.map(item => <CartAttrubutesButton key={item.id} id={item.id}>{item.displayValue}</CartAttrubutesButton>)}</span>}
                        </div>
                    </InfoDiv>
                    <CountDiv>
                        <br/>
                        <div>
                            <PlusMinusButton>+</PlusMinusButton>
                        </div>
                        <br/>
                        <div>
                            <div>{this.props.singleCartItem.quantity}</div>
                        </div>
                        <br/>
                        <div>
                            <PlusMinusButton>-</PlusMinusButton>
                        </div>
                    </CountDiv>
                    <ImgDiv>
                        <ProductImg src={this.state.product.gallery}/>
                    </ImgDiv>
                </SingleCartItemDiv>
            </div>
        );
    }
}

export default SingleCartItems;