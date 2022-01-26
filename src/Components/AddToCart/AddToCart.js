import React from "react";
import { 
    AttributeName,
    AttributesDiv,
    DescriptionDiv, 
    LargeDiv, 
    LargeImg, 
    LargeImgDiv, 
    NameProductToAdd, 
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
            isColorAttribute: false
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
            // console.log(data.data.product.attributes[0].items);
            this.setState({productToAdd: data.data.product});
            if (data.data.product.attributes !== []) {
                this.setState({attributes: data.data.product.attributes[0]});
                this.setState({items: data.data.product.attributes[0]?.items});
                if (this.state.attributes?.name === "Color") {
                    this.setState({isColorAttribute: true});
                }
            }
        })
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
                            {this.state.isColorAttribute && <span>{this.state?.items?.map(item => <SingleAttribute key={item.id} style={{background: `${item.value}`}}></SingleAttribute>)}</span>}
                            {!this.state.isColorAttribute && <span>{this.state?.items?.map(item => <SingleAttribute key={item.id}>{item.value}</SingleAttribute>)}</span>}
                        </AttributesDiv>
                    </DescriptionDiv>
                </ProductDescriptionDiv>}
            </div>
        );
    }
}

export default AddToCart;