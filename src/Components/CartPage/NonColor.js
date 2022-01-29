import React from 'react';
import { NonColorButton, SelectedNonColorButton } from './StyledNonColor';

class NonColor extends React.Component {
    render () {
        return (
            <>
                {
                    !(this.props.id === this.props.item.displayValue) && <NonColorButton>{this.props.item.displayValue}</NonColorButton>}
                {
                    (this.props.id === this.props.item.displayValue) && <SelectedNonColorButton>{this.props.item.displayValue}</SelectedNonColorButton> 
                }
            </>
        )
    }
}

export default NonColor;