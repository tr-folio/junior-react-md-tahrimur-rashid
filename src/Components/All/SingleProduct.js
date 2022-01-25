import React from "react";
import { 
    SingleProductCard, 
    SingleProductImg,
    SingleProductName,
    SingleProductPrice
} from "./StyledSingleProduct";

class SingleProduct extends React.Component {
    render() {
        return (
            <div>
                <SingleProductCard>
                    <div>
                        <SingleProductImg src={this.props.singleProduct.gallery}/>
                    </div>
                    <SingleProductName>{this.props.singleProduct.name}</SingleProductName>
                    <SingleProductPrice>${this.props.singleProduct.prices[0].amount}</SingleProductPrice>
                </SingleProductCard>
            </div>
        )
    }
}

export default SingleProduct;