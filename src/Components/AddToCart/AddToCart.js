import React from "react";
import { DescriptionDiv, LargeImgDiv, ProductDescriptionDiv, SmallImgDiv } from "./StyledAddToCart";

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productToAdd: {}
        };
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
            // console.log(data.data.product);
            this.setState({productToAdd: data.data.product});
        })
    }

    render() {
        return (
            <div>
                <br/><h1 style={{background: 'yellow'}}>Add To Cart</h1>
                {this.state.productToAdd && <h1>{this.state.productToAdd.name}</h1>}
                <ProductDescriptionDiv>
                    <SmallImgDiv></SmallImgDiv>
                    <LargeImgDiv></LargeImgDiv>
                    <DescriptionDiv></DescriptionDiv>
                </ProductDescriptionDiv>
            </div>
        );
    }
}

export default AddToCart;