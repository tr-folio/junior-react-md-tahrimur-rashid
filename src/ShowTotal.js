import React from "react";

class ShowTotal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            currencySymbol: '$'
        }
    }

    componentDidMount() {
        if (localStorage.getItem("totalPrice") !== null) {
            let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
            totalPrice = parseFloat(totalPrice);
            this.setState({totalPrice: totalPrice});
        }
        if (localStorage.getItem("currency") !== null) {
            const currencySymbol = localStorage.getItem("currency");
            this.setState({currencySymbol: currencySymbol});
        }
    }

    render() {
        return (
            <div>
                <h4>Total: {this.state.currencySymbol}{this.state.totalPrice}</h4>
            </div>
        );
    }
}

export default ShowTotal;