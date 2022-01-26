import React from 'react';
import './App.css';
import All from './Components/All/All';
import Clothes from './Components/Clothes/Clothes';
import NotFound from './Components/NotFound/NotFound';
import Tech from './Components/Tech/Tech';
import {
  HeaderDiv,
  HeaderButton,
  NavMenusDiv,
  ShoppingBagIconDiv,
  CurrencyCartDiv,
  CurrencyCartButton,
  ShoppingBagIcon,
  CurrenciesDiv,
  CurrencyDiv
} from "./StyledAppJs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNone: {
        display: 'none'
      },
      currencies: [],
      isCurrencyDiv: false
    };
    this.toggleCurrencyDiv = this.toggleCurrencyDiv.bind(this); // bind this with the method toggleCurrencyDiv
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: `
        {
          currencies {
            label
            symbol
          }
        }
      `})
    }).then(response => response.json())
    .then((data) => {
        // console.log(data.data.currencies);
        this.setState({currencies: data.data.currencies});
    });

    if (localStorage.getItem("currency") === null) {
      localStorage.setItem("currency", "$");
    } else {
      const currencySymbol = localStorage.getItem("currency");
      document.getElementById("currency-symbol").innerHTML = `${currencySymbol}`;
    }

    window.onload = function() {
      const currentPath = window.location.pathname;

      if (currentPath === "/") {
        document.getElementById('all').style.display = 'block';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/all") {
        document.getElementById('all').style.display = 'block';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/clothes") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'block';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'none';
      } else if (currentPath === "/tech") {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'block';
        document.getElementById('not-found').style.display = 'none';
      } else {
        document.getElementById('all').style.display = 'none';
        document.getElementById('clothes').style.display = 'none';
        document.getElementById('tech').style.display = 'none';
        document.getElementById('not-found').style.display = 'block';
      }
    }
  }

  displayAll() {
    window.location.pathname = "/all";
  }
  displayClothes() {
    window.location.pathname = "/clothes";
  }
  displayTech() {
    window.location.pathname = "/tech";
  }

  toggleCurrencyDiv() {
    if (this.state.isCurrencyDiv == false) {
      this.setState({isCurrencyDiv: true});
      document.getElementById("currencies-div").style.display = "inline-block";
      document.getElementById("caret-symbol").innerHTML = "&#8963";
    } else if (this.state.isCurrencyDiv == true) {
      this.setState({isCurrencyDiv: false});
      document.getElementById("currencies-div").style.display = "none";
      document.getElementById("caret-symbol").innerHTML = "&#8964";
    }
  }

  changeCurrency(event) {
    let currencyString = event.target.innerHTML;
    const toBeRemoved = currencyString.substr(-9);
    currencyString = currencyString.replace(toBeRemoved, "");
    document.getElementById("currency-symbol").innerHTML = `${currencyString}`;
    localStorage.setItem("currency", currencyString);
    this.toggleCurrencyDiv();
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <HeaderDiv>
          <NavMenusDiv>
            <HeaderButton onClick={this.displayAll}>All</HeaderButton>
            <HeaderButton onClick={this.displayClothes}>Clothes</HeaderButton>
            <HeaderButton onClick={this.displayTech}>Tech</HeaderButton>
          </NavMenusDiv>
          <ShoppingBagIconDiv>
            <ShoppingBagIcon>Icon</ShoppingBagIcon>
          </ShoppingBagIconDiv>
          <CurrencyCartDiv>
            <CurrencyCartButton onClick={this.toggleCurrencyDiv}>
              <span id="currency-symbol">$</span>&nbsp;
              <span id="caret-symbol">&#8964;</span>
            <CurrenciesDiv id="currencies-div">
              {this.state.currencies.map(currency => <CurrencyDiv onClick={this.changeCurrency}>{currency.symbol}&nbsp;{currency.label}</CurrencyDiv>)}
            </CurrenciesDiv>
            </CurrencyCartButton>
            <CurrencyCartButton>Cart</CurrencyCartButton>
          </CurrencyCartDiv>
        </HeaderDiv> <br/> <br/>
        <div id="page-container">
          <div id="all" style={this.state.displayNone}><All/></div>
          <div id="clothes" style={this.state.displayNone}><Clothes/></div>
          <div id="tech" style={this.state.displayNone}><Tech/></div>
          <div id="not-found" style={this.state.displayNone}><NotFound/></div>
        </div>
      </div>
    );
  }
}

export default App;
