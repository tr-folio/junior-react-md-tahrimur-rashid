import React from "react";

class SingleProduct extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.singleProduct.gallery} width="190" alt="image-not-found"/>
                </div>
                <h4>{this.props.singleProduct.name}</h4>
                <h4>${this.props.singleProduct.prices[0].amount}</h4>
            </div>
        )
    }
}

export default SingleProduct;