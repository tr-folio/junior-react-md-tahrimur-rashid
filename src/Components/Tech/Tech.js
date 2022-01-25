import React from "react";
import { TechProductsDiv, TechProductsH1 } from "./StyledTech";

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
                            gallery
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
            </TechProductsDiv>
        )
    }
}

export default Tech;