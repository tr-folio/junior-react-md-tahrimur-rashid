import React from "react";
import SingleTech from "./SingleTech";
import { 
    TechProductsContainer, 
    TechProductsDiv, 
    TechProductsGrid, 
    TechProductsH1 
} from "./StyledTech";

class Tech extends React.Component {
    constructor(props) {
        super(props);
        this.state = { techProducts: [] };
    }

    componentDidMount() {
        fetch('http://localhost:4000/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: `
                {
                    category (input: {
                        title: "tech"
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
            this.setState({techProducts: data.data.category.products});
        })
    }

    render() {
        return (
            <TechProductsDiv>
                <TechProductsH1>Tech</TechProductsH1>
                <TechProductsContainer>
                    <TechProductsGrid>
                        {this.state.techProducts.map(singleTech => <SingleTech key={singleTech.id} singleTech={singleTech}></SingleTech>)}
                    </TechProductsGrid>
                </TechProductsContainer>
            </TechProductsDiv>
        )
    }
}

export default Tech;