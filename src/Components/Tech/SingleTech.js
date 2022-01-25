import React from "react";
import { SingleTechCard, SingleTechImg, TechProductName, TechProductPrice } from "./StyledSingleTech";

class SingleTech extends React.Component {
    render() {
        return (
            <div>
                <SingleTechCard>
                    <div>
                        <SingleTechImg src={this.props.singleTech.gallery}/>
                    </div>
                    <TechProductName>{this.props.singleTech.name}</TechProductName>
                    <TechProductPrice>${this.props.singleTech.prices[0].amount}</TechProductPrice>
                </SingleTechCard>
                {this.props.singleTech.name}
            </div>
        );
    }
}

export default SingleTech;