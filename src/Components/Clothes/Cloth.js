import React from "react";
import { 
    ClothCard, 
    ClothImg, 
    ClothName,
    ClothPrice
} from "./StyledCloth";

class Cloth extends React.Component {
    render () {
        return (
            <div>
                <ClothCard>
                    <div>
                        <ClothImg src={this.props.singleCloth.gallery}/>
                    </div>
                    <ClothName>{this.props.singleCloth.name}</ClothName>
                    <ClothPrice>${this.props.singleCloth.prices[0].amount}</ClothPrice>
                </ClothCard>
            </div>
        );
    }
}

export default Cloth;