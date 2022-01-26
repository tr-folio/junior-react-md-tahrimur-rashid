import React from "react";
import SingleProduct from "./SingleProduct";
import { 
    AllProductsDiv, 
    AllProductsContainer, 
    AllProductsGrid,
    AllProductsH1
} from "./StyledAllProducts";

class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allProducts: [] };
    }

    componentDidMount() {
        fetch('http://localhost:4000/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: `
                {
                    category (input: {
                        title: "all"
                    }) {
                        products {
                            id
                            name
                            inStock
                            gallery
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
                }
            `})
        }).then(response => response.json())
        .then((data) => {
            // console.log(data.data.category.products);
            this.setState({allProducts: data.data.category.products});
        })
    }

    render() {
        return (
            <AllProductsDiv>
                <AllProductsH1>All</AllProductsH1>
                <AllProductsContainer>
                    <AllProductsGrid>
                        {this.state.allProducts.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}></SingleProduct>)}
                    </AllProductsGrid>
                </AllProductsContainer>
            </AllProductsDiv>
        )
    }
}

export default All;