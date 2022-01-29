import React from "react";
import Color from "./Components/CartPage/Color";
import NonColor from "./Components/CartPage/NonColor";
import { CountDiv, ImgDiv, InfoDiv, MinusButton, PlusButton, ProductImg, SingleCartItemDiv } from "./StyledSingleMiniCart";

class SingleMiniCart extends React.Component {
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
            attributes: {},
            totalPrice: 0,
            isLastItem: false
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
                this.setState({items: data.data.product.attributes[0]?.items});
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
                        // localStorage.setItem("totalPrice", "empty");
                        if (localStorage.getItem("totalPrice") === "empty") {
                            let totalPrice = this.state.amount+"";
                            localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
                            this.setState({totalPrice: totalPrice});
                        } else {
                            let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
                            totalPrice = parseFloat(totalPrice);
                            let newPrice = this.state.amount;
                            newPrice = parseFloat(newPrice);
                            totalPrice = totalPrice + newPrice;
                            totalPrice = totalPrice.toFixed(2);
                            totalPrice = totalPrice+"";
                            localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
                            this.setState({totalPrice: totalPrice});
                        }
                        this.setState({activeCurrencySymbol: currencySymbol});
                        // console.log(this.state.activeCurrencySymbol);
                        break;
                    }
                }
            }
        })
        const temporary_cart = JSON.parse(localStorage.getItem("shoppingCart"));
        // console.log(temporary_cart);
        const cartLength = temporary_cart.length;
        const lastItemId = temporary_cart[cartLength-1].id;
        if (this.props.singleCartItem.id === lastItemId) {
            // this.state.isLastItem = true;
            this.setState({isLastItem: true});
            // console.log(lastItemId);
            // console.log(this.state.isLastItem)
        }
    }

    increaseQuantity(id) {
        const temporary_cart = JSON.parse(localStorage.getItem("shoppingCart"));
        for (let i=0; i<temporary_cart.length; i++) {
            if (temporary_cart[i].id === id) {
                temporary_cart[i].quantity += 1;
                localStorage.removeItem("shoppingCart");
                localStorage.setItem("shoppingCart", JSON.stringify(temporary_cart));
                break;
            }
        }
        window.location.reload();
    }

    decreaseQuantity(id) {
        const temporary_cart = JSON.parse(localStorage.getItem("shoppingCart"));
        for (let i=0; i<temporary_cart.length; i++) {
            if (temporary_cart[i].id === id) {
                if (temporary_cart[i].quantity === 1) {
                    break;
                } else {
                    temporary_cart[i].quantity -= 1;
                    localStorage.removeItem("shoppingCart");
                    localStorage.setItem("shoppingCart", JSON.stringify(temporary_cart));
                    break;
                }
            }
        }
        window.location.reload();
    }

    render() {
        return (
            <div>
                <SingleCartItemDiv>
                    <InfoDiv>
                        <h3>{this.props.singleCartItem.name}</h3>
                        <h4>{this.state.activeCurrencySymbol}{this.state.amount}</h4>
                        {!(this.props.singleCartItem.attributeName === "") && <div>
                            {this.state.isColorAttribute && <span>{this.state.items.map(item => <Color key={item.id} id={this.props.singleCartItem.attribute} item={item}></Color>)}</span>}
                            {!this.state.isColorAttribute && <span>{this.state.items.map(item => <NonColor key={item.id} id={this.props.singleCartItem.attribute} item={item}></NonColor>)}</span>}
                        </div>}
                    </InfoDiv>
                    <CountDiv>
                        <br/>
                        <div>
                            <PlusButton onClick={() => this.increaseQuantity(this.props.singleCartItem.id)}>+</PlusButton>
                        </div>
                        <br/>
                        <div>
                            <div>{this.props.singleCartItem.quantity}</div>
                        </div>
                        <br/>
                        <div>
                            <MinusButton onClick={() => this.decreaseQuantity(this.props.singleCartItem.id)}>-</MinusButton>
                        </div>
                    </CountDiv>
                    <ImgDiv>
                        <ProductImg src={this.state.product.gallery}/>
                    </ImgDiv>
                </SingleCartItemDiv>
                {this.state.isLastItem && <h4>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.activeCurrencySymbol}{this.state.totalPrice}</h4>}
                
            </div>
        );
    }
}

export default SingleMiniCart;