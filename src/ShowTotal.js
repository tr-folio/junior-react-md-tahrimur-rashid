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
        // localStorage.setItem("totalPrice", "empty");
        if (localStorage.getItem("totalPrice") !== "empty") {
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