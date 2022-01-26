import React from "react";
import { 
    AddToCartButtonDiv,
    AttributeName,
    AttributesDiv,
    ButtonAddToCart,
    DescriptionDiv, 
    DescriptionTextDiv, 
    LargeDiv, 
    LargeImg, 
    LargeImgDiv, 
    NameProductToAdd, 
    PriceAmountH4, 
    PriceH4, 
    ProductDescriptionDiv, 
    SingleAttribute, 
    SmallDiv, 
    SmallImg, 
    SmallImgDiv 
} from "./StyledAddToCart";

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productToAdd: {},
            attributes: {},
            items: [],
            isColorAttribute: false,
            currencyIndex: 0,
            activeCurrencySymbol: "$",
            itemAmount: 0
        };
        this.selectNonColorAttribute = this.selectNonColorAttribute.bind(this);
        this.selectColorAttribute = this.selectColorAttribute.bind(this);
    }

    componentDidMount() {
        const productId = localStorage.getItem("beforeCart");
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
            // console.log(data.data.product.attributes[0].items);
            this.setState({productToAdd: data.data.product});
            let descriptionToFormat = this.state.productToAdd.description;
            descriptionToFormat = descriptionToFormat.replace("\n", "<br/>");
            // console.log(descriptionToFormat);
            document.getElementById("description-div").innerHTML = descriptionToFormat;
            if (data.data.product.attributes !== []) {
                this.setState({attributes: data.data.product.attributes[0]});
                this.setState({items: data.data.product.attributes[0]?.items});
                if (this.state.attributes?.name === "Color") {
                    this.setState({isColorAttribute: true});
                }
            }
            if (localStorage.getItem("currency") === null) {
                localStorage.setItem("currency", "$");
            } else {
                let currencySymbol = localStorage.getItem("currency");
                const prices = this.state.productToAdd.prices;
                for (let i=0; i<prices.length; i++) {
                    if (currencySymbol === prices[i].currency.symbol) {
                        // console.log(i);
                        this.setState({currencyIndex: i});
                        // console.log(this.state.currencyIndex);
                        this.setState({activeCurrencySymbol: currencySymbol});
                        // console.log(this.state.activeCurrencySymbol);
                        this.setState({itemAmount: prices[i].amount});
                        // console.log(this.state.itemAmount);
                        break;
                    }
                }
            }
        })
    }

    selectNonColorAttribute(id) {
        for (let i=0; i<this.state.items.length; i++) {
            if (this.state.items[i].id === id) {
                document.getElementById(this.state.items[i].id).style.backgroundColor = 'black';
                document.getElementById(this.state.items[i].id).style.color = 'white';
                localStorage.setItem("selectedAttribute", this.state.items[i].displayValue);
            } else {
                document.getElementById(this.state.items[i].id).style.backgroundColor = 'white';
                document.getElementById(this.state.items[i].id).style.color = 'black';
            }
        }
    }

    selectColorAttribute(id) {
        for (let i=0; i<this.state.items.length; i++) {
            if (this.state.items[i].id === id) {
                document.getElementById(this.state.items[i].id).style.border = '2px solid blue';
                localStorage.setItem("selectedAttribute", this.state.items[i].displayValue);
            } else {
                document.getElementById(this.state.items[i].id).style.border = '2px solid black';
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.productToAdd && 
                <ProductDescriptionDiv>
                    <SmallImgDiv>
                        <SmallDiv>
                            <SmallImg src={this.state.productToAdd.gallery}/>
                        </SmallDiv> <br/>
                        <SmallDiv>
                            <SmallImg src={this.state.productToAdd.gallery}/>
                        </SmallDiv> <br/>
                        <SmallDiv>
                            <SmallImg src={this.state.productToAdd.gallery}/>
                        </SmallDiv>
                    </SmallImgDiv>
                    <LargeImgDiv>
                        <LargeDiv>
                            <LargeImg src={this.state.productToAdd.gallery}/>
                        </LargeDiv>
                    </LargeImgDiv>
                    <DescriptionDiv>
                        <NameProductToAdd>{this.state.productToAdd.name}</NameProductToAdd>
                        <br/>
                        {this.state.attributes && <AttributeName>{this.state.attributes.name}:</AttributeName>}
                        <AttributesDiv>
                            {this.state.isColorAttribute && <span>{this.state?.items?.map(item => <SingleAttribute key={item.id} style={{background: `${item.value}`}} id={item.id} onClick={() => this.selectColorAttribute(item.id)}></SingleAttribute>)}</span>}
                            {!this.state.isColorAttribute && <span>{this.state?.items?.map(item => <SingleAttribute key={item.id} id={item.id} onClick={() => this.selectNonColorAttribute(item.id)}>{item.value}</SingleAttribute>)}</span>}
                        </AttributesDiv>
                        <br/>
                        <PriceH4>Price:</PriceH4>
                        <PriceAmountH4>{this.state.activeCurrencySymbol}{this.state.itemAmount}</PriceAmountH4>
                        <br/>
                        <AddToCartButtonDiv>
                            <ButtonAddToCart>ADD TO CART</ButtonAddToCart>
                        </AddToCartButtonDiv>
                        <br/>
                        <DescriptionTextDiv id="description-div"></DescriptionTextDiv>
                    </DescriptionDiv>
                </ProductDescriptionDiv>}
            </div>
        );
    }
}

export default AddToCart;