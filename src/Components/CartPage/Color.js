import React from 'react';
import { ColorButton, SelectedColorButton } from './StyledColor';

class Color extends React.Component {
    render () {
        return (
            <>
                {
                    !(this.props.id === this.props.item.displayValue) && <ColorButton style={{background: `${this.props.item.value}`}}></ColorButton>}
                {
                    (this.props.id === this.props.item.displayValue) && <SelectedColorButton style={{background: `${this.props.item.value}`}}></SelectedColorButton> 
                }
            </>
        )
    }
}

export default Color;