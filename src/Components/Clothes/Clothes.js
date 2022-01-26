import React from "react";
import Cloth from "./Cloth";
import {
    ClothesContainer,
    ClothesDiv, 
    ClothesGrid, 
    ClothesH1
} from "./StyledClothes";

class Clothes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allClothes: [] };
    }

    componentDidMount() {
        fetch('http://localhost:4000/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: `
                {
                    category (input: {
                        title: "clothes"
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
            this.setState({allClothes: data.data.category.products});
        })
    }

    render() {
        return (
            <ClothesDiv>
                <ClothesH1>Clothes</ClothesH1>
                <ClothesContainer>
                    <ClothesGrid>
                        {this.state.allClothes.map(singleCloth => <Cloth key={singleCloth.id} singleCloth={singleCloth}></Cloth>)}
                    </ClothesGrid>
                </ClothesContainer>
            </ClothesDiv>
        )
    }
}

export default Clothes;